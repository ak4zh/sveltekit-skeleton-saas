import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { setLocale } from '$i18n/i18n-svelte'

export const load = async ({ data: { locale, user } }) => {
	await loadLocaleAsync(locale)
	setLocale(locale)
	return { locale, user }
}