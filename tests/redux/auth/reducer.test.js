import authReducer, { authTypes } from '../../../src/redux/modules/auth';

describe('(Reducer) auth', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('should handle NOT_LOGGED_IN', () => {
    expect(authReducer(undefined, { type: authTypes.NOT_LOGGED_IN })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGIN_STATUS', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_STATUS })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_REQUEST })).to.deep.equal({
      isAuthenticated: false,
      isFetching: true,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(authReducer(undefined, {
      type: authTypes.LOGIN_SUCCESS, idToken: 'foo', accessToken: 'bar', profile: { fakeProperty: 'fakeValue' },
    })).to.deep.equal({
      isAuthenticated: true,
      isFetching: false,
      isLoggingOut: false,
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
      error: null,
    });
  });

  it('should handle LOGIN_ERROR', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_ERROR, error: 'fakeError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: 'fakeError',
    });
  });

  it('should handle LOGOUT_REQUEST', () => {
    expect(authReducer(undefined, { type: authTypes.LOGOUT_REQUEST })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: true,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(authReducer(undefined, { type: authTypes.LOGOUT_SUCCESS, isLoggingOut: false, error: 'fakeError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });
});