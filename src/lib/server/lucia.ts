import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prisma from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";
import { prisma as prismaClient } from '$lib/server/database'

export const auth = lucia({
	adapter: prisma(prismaClient),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
    transformDatabaseUser: (userData) => {
		return {
			id: userData.id,
            email: userData.email
		};
	}
});

export type Auth = typeof auth;