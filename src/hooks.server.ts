import { auth } from "$lib/server/lucia";
import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const isProtected = event.route.id?.startsWith('/(protected)/')
	if (!isProtected) return await resolve(event)
	const session = await event.locals.auth.validate()
	if (!session) throw redirect(302, '/login')
	return await resolve(event);
};