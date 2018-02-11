import { ENVIRONMENT } from '../constant';

const AUTH_CONFIG = {
  test: {
    domain: 'signsfive.auth0.test',
    clientId: 'test_id',
    callbackUrl: 'http://localhost:3000/',
  },
  development: {
    domain: 'signsfive.auth0.com',
    clientId: 'MNZGv1cpercLQgy0fCb3MHqeO0HN8uGP',
    callbackUrl: 'http://localhost:3000/',
  },
  staging: {
    domain: 'signsfive.auth0.com',
    clientId: 'MNZGv1cpercLQgy0fCb3MHqeO0HN8uGP',
    callbackUrl: 'https://signsfive-web-staging.herokuapp.com/',
  },
};

export default AUTH_CONFIG[ENVIRONMENT];
