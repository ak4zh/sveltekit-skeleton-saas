import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

// If the user exists, redirect authenticated users to the profile page.
export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
};

export const actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get("email");
		const password = form.get("password");
		// check for empty values
		if (typeof email !== "string" || typeof password !== "string")
			return fail(400);
		try {
			const key = await auth.useKey("email", email, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch {
			// invalid credentials
			return fail(400);
		}
	}
};