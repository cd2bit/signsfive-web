import { expect } from 'chai';
import { authTypes, authActions } from '../';

describe('(Actions) auth', () => {
  it('should create an action for LOGIN_REQUEST', () => {
    const expectedAction = {
      type: authTypes.LOGIN_REQUEST,
    };
    expect(authActions.loginRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action for LOGIN_SUCCESS', () => {
    const fakeIdToken = 'foo';
    const fakeAccessToken = 'bar';
    const fakeProfile = { fakeProperty: 'fakeValue' };
    const expectedAction = {
      type: authTypes.LOGIN_SUCCESS,
      idToken: fakeIdToken,
      accessToken: fakeAccessToken,
      profile: fakeProfile,
    };
    expect(authActions.loginSuccess({idToken: fakeIdToken, accessToken: fakeAccessToken, profile: fakeProfile})).to.deep.equal(expectedAction);
  });

  it('should create an action for LOGIN_ERROR', () => {
    const fakeError = 'fakeError';
    const expectedAction = {
      type: authTypes.LOGIN_ERROR,
      error: fakeError,
    };
    expect(authActions.loginError(fakeError)).to.deep.equal(expectedAction);
  });

  it('should create an action for LOGOUT_REQUEST', () => {
    const expectedAction = {
      type: authTypes.LOGOUT_REQUEST,
    };
    expect(authActions.logoutRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action for LOGOUT_SUCCESS', () => {
    const expectedAction = {
      type: authTypes.LOGOUT_SUCCESS,
    };
    expect(authActions.logoutSuccess()).to.deep.equal(expectedAction);
  });
});
