export const load = ({ locals: { locale } }) => {
	// pass locale information from "server-context" to "shared server + client context"
	return { locale }
}