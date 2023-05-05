export const load = async (event) => {
	const { session, user } = await event.locals.auth.validateUser()
	return { session, user }
}