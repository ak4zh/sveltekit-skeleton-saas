// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	ROUTE: {
		AUTH: {
			/**
			 * L​o​g​ ​I​n
			 */
			LOG_IN: string
			/**
			 * S​i​g​n​ ​U​p
			 */
			SIGN_UP: string
			/**
			 * C​r​e​a​t​e​ ​a​n​ ​a​c​c​o​u​n​t
			 */
			CREATE_ACCOUNT: string
			/**
			 * S​u​b​m​i​t
			 */
			SUBMIT: string
			/**
			 * E​m​a​i​l
			 */
			EMAIL: string
			/**
			 * P​a​s​s​w​o​r​d
			 */
			PASSWORD: string
			/**
			 * D​o​n​'​t​ ​h​a​v​e​ ​a​n​ ​a​c​c​o​u​n​t​?
			 */
			NO_ACCOUNT: string
		}
	}
	PAGES: {
		HOME: {
			/**
			 * W​e​b​s​i​t​e​ ​T​a​g​l​i​n​e​ ​i​n​ ​E​n​g​l​i​s​h
			 */
			TAG_LINE: string
		}
	}
}

export type TranslationFunctions = {
	ROUTE: {
		AUTH: {
			/**
			 * Log In
			 */
			LOG_IN: () => LocalizedString
			/**
			 * Sign Up
			 */
			SIGN_UP: () => LocalizedString
			/**
			 * Create an account
			 */
			CREATE_ACCOUNT: () => LocalizedString
			/**
			 * Submit
			 */
			SUBMIT: () => LocalizedString
			/**
			 * Email
			 */
			EMAIL: () => LocalizedString
			/**
			 * Password
			 */
			PASSWORD: () => LocalizedString
			/**
			 * Don't have an account?
			 */
			NO_ACCOUNT: () => LocalizedString
		}
	}
	PAGES: {
		HOME: {
			/**
			 * Website Tagline in English
			 */
			TAG_LINE: () => LocalizedString
		}
	}
}

export type Formatters = {}
