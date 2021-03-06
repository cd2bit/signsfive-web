/**
 * @external {jwtDecode} https://www.npmjs.com/package/jwt-decode
 */
import jwtDecode from 'jwt-decode';
/**
 * @external {Promise} https://www.npmjs.com/package/promise
 */
import Promise from 'promise';

import AUTH0 from './auth-web';

import {
  ID_TOKEN,
  ACCESS_TOKEN,
  EXPIRES_AT,
  PROFILE,
} from '../constant';

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
    const token = AuthService.getIdToken();
    return !!token && !AuthService.isTokenExpired(token);
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
                AuthService.setIdToken(idToken);
                AuthService.setAccessToken(accessToken);
                AuthService.setProfile(profile);
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
          resolve(null);
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
    const token = AuthService.getIdToken();
    const decoded = jwtDecode(token);
    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0); // 0 sets date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  static isTokenExpired() {
    const token = AuthService.getIdToken();
    if (!token) {
      return true;
    }

    const date = AuthService.getTokenExpirationDate();
    if (date === null) {
      return true;
    }

    return !(date.valueOf() > ((new Date()).valueOf()));
  }
}
