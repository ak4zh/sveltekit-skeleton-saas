import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import { z } from 'zod';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { LuciaError } from "lucia-auth";

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

// If the user exists, redirect authenticated users to the profile page.
export const load = async ({ locals }) => {
	const form = await superValidate(schema);
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/profile");
	return { form }
};

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) return fail(400, { form });

		try {
			const key = await auth.useKey("email", form.data.email, form.data.password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (err) {
			if (err instanceof LuciaError) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				setError(form, 'email', err.message || '');
			} else {
				setError(form, 'email', "Something went wrong!");
			}
			return { form }
		}
	}
};