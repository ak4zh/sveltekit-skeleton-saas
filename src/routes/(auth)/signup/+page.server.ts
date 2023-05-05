import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
	return {};
};

export const actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get("email");
		const password = form.get("password");

		// check for empty values
		if (typeof email !== "string" || typeof password !== "string") {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: "email",
					providerUserId: email,
					password
				},
				attributes: {
					email
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch {
			// username already in use
			return fail(400);
		}
	}
};