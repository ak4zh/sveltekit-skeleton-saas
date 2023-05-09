import { auth } from "$lib/server/lucia";
import { redirect } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const isProtected = event.route.id?.startsWith('/(protected)/')
	if (!isProtected) return await resolve(event)
	const session = await event.locals.auth.validate()
	if (!session) throw redirect(302, '/signin')
	return await resolve(event);
};
