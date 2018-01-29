const AUTH_CONFIG = {
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

export default AUTH_CONFIG[process.env.NODE_ENV];
