import auth0 from 'auth0-js';
import AUTH_CONFIG from './auth-config';

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

export default AUTH0;
