import type { Translation } from '../i18n-types'

const de = {
	ERRORS: {
		INVALID_CREDENTIALS: "Invalid user credentials!",
		UNKNOWN: "Something went wrong!"
	},
	BRANDING: {
		NAME: "Sveltekit Skeleton SaaS"
	},
	SEO: {
		TITLE: "Sveltekit Skeleton SaaS",
		DESCRIPTION: "Sveltekit Skeleton SaaS template"
	},
	ROUTE: {
		AUTH: {
			SIGN_IN: "Log In",
			SIGN_UP: "Sign Up",
			SIGN_OUT: "Log Out",
			CREATE_ACCOUNT: "Create an account",
			SUBMIT: "Submit",
			EMAIL: "Email",
			PASSWORD: "Password",
			NO_ACCOUNT: "Don't have an account?"
		}
	},
	PAGES: {
		HOME: {
			TAG_LINE: 'Website Tagline in English'
		},
		PROFILE: {
			CHANGE_PASSWORD: "Change Password"
		}
		
	}
} satisfies Translation

export default de
