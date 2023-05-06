import { fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import { z } from 'zod';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { LuciaError } from "lucia-auth";

const schema = z.object({
	password: z.string(),
	confirmPassword: z.string()
});

export const load = async () => {
	const form = await superValidate(schema, );
	return { form }
};

export const actions = {
	default: async ({ request, locals }) => {
		const { user } = await locals.auth.validateUser();

		const form = await superValidate(request, schema);
		if (!form.valid) return fail(400, { form });
		if (form.data.password !== form.data.confirmPassword) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			setError(form, 'password', 'Password does not match')
			setError(form, 'confirmPassword', 'Password does not match')
			return { form }
		}
		try {
			const key = await auth.updateKeyPassword("email", user.email, form.data.password)
		} catch (err) {
			if (err instanceof LuciaError) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				setError(form, 'password', err.message || '');
			} else {
				setError(form, 'password', "Something went wrong!");
			}
			return { form }
		}
	}
};