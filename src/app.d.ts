declare global {
	namespace App {
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
		interface PageData {
			user: import('lucia-auth').User
		}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/lucia").Auth;
		type UserAttributes = {
			email: string
		};
	}
}

// THIS IS IMPORTANT!!!
export {};