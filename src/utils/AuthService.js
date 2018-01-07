import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import Promise from 'promise';

import AUTH_CONFIG from './auth0-variables';

const ID_TOKEN = 'id_token';
const ACCESS_TOKEN = 'access_token';
const EXPIRES_AT = 'expires_at';
const PROFILE = 'profile';

const AUTH0 = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: 'https://api.signsfive.com/',
  responseType: 'token id_token',
  scope: 'openid profile email https://api.signsfive.com/roles https://api.signsfive.com/permissions https://api.signsfive.com/groups',
  leeway: 60,
  grant_type: 'authorization_code',
});

export default class AuthService {
  static login() {
    AUTH0.authorize();
  }

  static logout() {
    // Clear access token and ID token from local storage
    return new Promise((resolve) => {
      window.localStorage.removeItem(ACCESS_TOKEN);
      window.localStorage.removeItem(ID_TOKEN);
      window.localStorage.removeItem(EXPIRES_AT);
      window.localStorage.removeItem(PROFILE);
      resolve(true);
    });
  }

  static isAuthenticated() {
    const token = this.getIdToken();
    return !!token && !this.isTokenExpired(token);
  }

  static handleAuthentication() {
    return new Promise((resolve, reject) => {
      AUTH0.parseHash((err, authResult) => {
        if (authResult) {
          const { accessToken, idToken } = authResult;
          if (accessToken && idToken) {
            AUTH0.client.userInfo(accessToken, (err2, profile) => {
              if (err2) {
                reject(err2);
              } else {
                this.setIdToken(idToken);
                this.setAccessToken(accessToken);
                this.setProfile(profile);
                resolve({
                  idToken,
                  accessToken,
                  profile,
                });
              }
            });
          } else {
            reject(new Error('No hash to parse!'));
          }
        } else if (err) {
          reject(err);
        } else {
          reject(new Error({ response: {} }));
        }
      });
    });
  }

  static getProfile() {
    const profile = window.localStorage.getItem(PROFILE);
    return profile ? JSON.parse(profile) : {};
  }

  static setProfile(profile) {
    window.localStorage.setItem(PROFILE, JSON.stringify(profile));
  }

  static getIdToken() {
    return window.localStorage.getItem(ID_TOKEN);
  }

  static setIdToken(idToken) {
    window.localStorage.setItem(ID_TOKEN, idToken);
  }

  static getAccessToken() {
    return window.localStorage.getItem(ACCESS_TOKEN);
  }

  static setAccessToken(accessToken) {
    window.localStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  static getTokenExpirationDate() {
    const token = this.getIdToken();
    const decoded = jwtDecode(token);
    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0); // 0 sets date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  static isTokenExpired() {
    const token = this.getIdToken();
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate();
    if (date === null) {
      return true;
    }

    return (date.valueOf() > ((new Date()).valueOf()));
  }
}
