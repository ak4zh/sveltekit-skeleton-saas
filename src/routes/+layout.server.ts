export const load = async ({ locals: { locale, auth } }) => {
	const { user } = await auth.validateUser()
	// pass locale information from "server-context" to "shared server + client context"
	return { locale, user }
}