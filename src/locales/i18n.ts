import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { ConvertedToObjectType } from '../interfaces';

import en from './en/translation.json';
import ja from './ja/translation.json';

// Add json translations here
const translationsJson = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

type LanguageCodesType = {
  [key: string]: string;
};

export const languageCodes: LanguageCodesType = {
  English: 'en',
  Japanese: 'ja',
};

export type TranslationResource = typeof en;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToObjectType<TranslationResource> = {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
const convertLanguageJsonToObject = (obj: any, dict: any, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = currentLookupKey;
    }
  });
};

export const i18n = (language: string): any =>
  i18next
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(
      {
        resources: translationsJson,
        fallbackLng: language,
        debug: process.env.NODE_ENV !== 'production',
        react: {
          useSuspense: true,
        },
      },
      () => {
        convertLanguageJsonToObject(en, translations);
      }
    );
