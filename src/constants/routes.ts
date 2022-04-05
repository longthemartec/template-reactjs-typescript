const EMPLOYER_ROOT = '/employer';
const ADVOCATE_ROOT = '/advocate';
const COMPANY_ROOT = '/company';

export const MAIN_ROUTES = {
  LANDING: '/',
  NOT_FOUND: '/not-found',
  PUBLIC_PAGE: (companyUrl = ':companyUrl', pageUrl = ':pageUrl?'): string =>
    `/${companyUrl}/${pageUrl}`,
  CONTENT_PLANNER: '/content-planner/:companyId/:contentPackageId/:email?',
  RECIPE_DETAIL: `/recipe/:recipeId/:contentPackageId/:companyId/:email?`
};

export const EMPLOYER_ROUTES = {
  ROOT: `${EMPLOYER_ROOT}`,
  LOGIN: `${EMPLOYER_ROOT}/login`,
  REGISTER: `${EMPLOYER_ROOT}/register/:token?`,
  REGISTER_DETAILS: `${EMPLOYER_ROOT}/register-details`,
  FORGOT_PASSWORD: `${EMPLOYER_ROOT}/forgot-password`,
  INSIDE_LOOK: `${EMPLOYER_ROOT}/inside-look`,
  ONBOARDING: `${EMPLOYER_ROOT}/onboarding`,
  INSIDE_LOOK_VIEW: `${EMPLOYER_ROOT}/inside-look/preview`,
  INSIDE_LOOK_UPDATE: (page_id = ':page_id'): string =>
    `${EMPLOYER_ROOT}/inside-look/update/${page_id}`,
  STORY_EDITOR: `${EMPLOYER_ROOT}/story-editor`,
  STORY_EDITOR_DETAIL: `${EMPLOYER_ROOT}/dashboard/:storyId`,
  DASHBOARD: `${EMPLOYER_ROOT}/dashboard`,
  SHOWCASE_EDITOR: (id = ':id?'): string =>
    `${EMPLOYER_ROOT}/showcase/editor/${id}`,
  SHOWCASE_PAGE_DETAILS: (page_id = ':page_id'): string =>
    `${EMPLOYER_ROOT}/showcase/page-details/${page_id}`,
  STORY_BUILDER_DETAIL: `${EMPLOYER_ROOT}/story-builder/:storyId`,
  HOMEPAGE: `${EMPLOYER_ROOT}/content-recipe`,
  STORY_UPSELLING: `${EMPLOYER_ROOT}/story-upselling`,
  CONTENT_CALENDAR: `${EMPLOYER_ROOT}/content-calendar`,
  RECIPE_DETAIL: `${EMPLOYER_ROOT}/content-calendar/:recipeId/:contentPackageId/:companyId`
};

export const ADVOCATE_ROUTES = {
  ROOT: `${ADVOCATE_ROOT}`,
  LOGIN: `${ADVOCATE_ROOT}/login`,
  REGISTER: (reference = ':reference', token = ':token'): string =>
    `${ADVOCATE_ROOT}/register/${reference}/${token}`,
  REGISTER_DEFAULT: `${ADVOCATE_ROOT}/register`,
  REGISTER_DETAILS: `${ADVOCATE_ROOT}/register-details`,
  FORGOT_PASSWORD: `${ADVOCATE_ROOT}/forgot-password`,
  WRITE_STORY: `${ADVOCATE_ROOT}/write-story`,
  STORY_MANAGEMENT: `${ADVOCATE_ROOT}/story`,
  STORY_DETAILS: `${ADVOCATE_ROOT}/story/:storyId`,
  TOPIC_CALIBRATION: `${ADVOCATE_ROOT}/topic-calibration`,
  SETTINGS: `${ADVOCATE_ROOT}/settings`,
  TRIBES: `${ADVOCATE_ROOT}/tribes`,
  ONBOARDING: `${ADVOCATE_ROOT}/onboarding`,
  DOWNLOAD_APP: `${ADVOCATE_ROOT}/download-app`,
};

export const COMPANY_ROUTES = {
  ROOT: `${COMPANY_ROOT}`,
  VIEW_PAGE: (url = ':url'): string => `${COMPANY_ROUTES.ROOT}/${url}`,
};

export const APP_URL = {
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.themartec.mobile',
  APP_STORE: 'https://apps.apple.com/au/app/the-martec/id1549620997',
};

export const API_GOOGLE_FONTS_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBDmXIS5vcJKwo3HhlOAu4tZ5IFyrDqVP8';

export const isProd = process.env.REACT_APP_ENV === 'prod'

export const API = {
  URL: process.env.REACT_APP_API_URL || 'http://localhost:3010',
  // URL: 'https://apistaging.themartec.com',
  VERSION: process.env.REACT_APP_API_VERSION || 'v1',
};

export const PUBLISH_LINK_URL = process.env.REACT_APP_PUBLISH_URL || 'http://localhost:3000'

//Open app
export const DEEP_LINK_URL = process.env.DEEP_LINK_URL || 'themartec://localhost:3000'
