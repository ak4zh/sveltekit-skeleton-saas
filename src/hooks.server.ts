import { auth } from "$lib/server/lucia";
import { redirect, type RequestEvent } from '@sveltejs/kit'
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import type { Locales } from "$i18n/i18n-types";

loadAllLocales()
const L = i18n()

export const handle = async ({ event, resolve }) => {
	const [, lang] = event.url.pathname.split('/')
	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event)
	const LL = L[locale]
	// bind locale and translation functions to current request
	event.locals.locale = locale
	event.locals.LL = LL

	event.locals.auth = auth.handleRequest(event);
	const isProtected = event.route.id?.startsWith('/(protected)/')
	if (!isProtected) return await resolve(event)
	const session = await event.locals.auth.validate()
	if (!session) throw redirect(302, '/login')
	return await resolve(event);
};

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)
	return detectLocale(acceptLanguageDetector)
}