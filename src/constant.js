/**
 * @external {process.env.npm_package_version} https://docs.npmjs.com/files/package.json
*/
/**
 * @constant
 * @type {process.env.npm_package_version} APP_VERSION
*/
export const APP_VERSION = process.env.npm_package_version || 'x.x.x';
/**
 * @external {process.env.NODE_ENV} https://webpack.js.org/guides/production/#specify-the-environment
*/
/**
 * @constant
 * @type {process.env.NODE_ENV} ENVIRONMENT
*/
export const ENVIRONMENT = process.env.NODE_ENV || 'development';
/**
 * @constant
 * @type {boolean} DEBUG
*/
export const DEBUG = process.env.NODE_ENV === 'development';
/**
 * @constant
 * @type {string} REDUX_PREFIX
*/
export const REDUX_PREFIX = '@@signsfive';

// Auth0 constants START
/**
 * @constant
 * @type {string} ID_TOKEN
*/
export const ID_TOKEN = 'id_token';
/**
 * @constant
 * @type {string} ACCESS_TOKEN
*/
export const ACCESS_TOKEN = 'access_token';
/**
 * @constant
 * @type {string} EXPIRES_AT
*/
export const EXPIRES_AT = 'expires_at';
/**
 * @constant
 * @type {string} PROFILE
*/
export const PROFILE = 'profile';
// Auth0 constants END
