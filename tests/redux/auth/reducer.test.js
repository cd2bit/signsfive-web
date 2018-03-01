import authReducer, { authTypes } from '../../../src/redux/modules/auth';

describe('(Reducer) auth', () => {
  let reducer;

  it('returns the initial state', () => {
    reducer = authReducer(undefined, {});
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles NOT_LOGGED_IN', () => {
    reducer = authReducer(undefined, {
      type: authTypes.NOT_LOGGED_IN,
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles IS_LOGGED_IN', () => {
    reducer = authReducer(undefined, {
      type: authTypes.IS_LOGGED_IN,
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles LOGIN_STATUS', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGIN_STATUS,
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles LOGIN_REQUEST', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGIN_REQUEST,
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: true,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles LOGIN_SUCCESS', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGIN_SUCCESS,
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: true,
      isFetching: false,
      isLoggingOut: false,
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
      error: null,
    });
  });

  it('handles LOGIN_ERROR', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGIN_ERROR,
      error: 'fakeError',
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: false,
      idToken: null,
      accessToken: null,
      profile: {},
      error: 'fakeError',
    });
  });

  it('handles LOGOUT_REQUEST', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGOUT_REQUEST,
    });
    expect(reducer).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      isLoggingOut: true,
      idToken: null,
      accessToken: null,
      profile: {},
      error: null,
    });
  });

  it('handles LOGOUT_SUCCESS', () => {
    reducer = authReducer(undefined, {
      type: authTypes.LOGOUT_SUCCESS,
      isLoggingOut: false,
      error: 'fakeError',
    });
    expect(reducer).to.deep.equal({
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
