type Locales = import('$i18n/i18n-types').Locales
type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions


declare global {
	namespace App {
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
			locale: Locales;
			LL: TranslationFunctions;
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