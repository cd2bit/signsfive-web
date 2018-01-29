import { spy, stub } from 'sinon';
import { expect } from 'chai';

import { authTypes, authActions } from '../';
import AuthService from '../../../../utils/AuthService';

describe('(Actions) auth ', () => {
  it('should create an action for LOGIN_REQUEST', () => {
    expect(authActions.loginStatus()).to.deep.equal({
      type: authTypes.LOGIN_STATUS,
    });
  });

  it('should create an action for LOGIN_REQUEST', () => {
    expect(authActions.loginRequest()).to.deep.equal({
      type: authTypes.LOGIN_REQUEST,
    });
  });

  it('should create an action for LOGIN_SUCCESS', () => {
    expect(authActions.loginSuccess({
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
    })).to.deep.equal({
      type: authTypes.LOGIN_SUCCESS,
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
    });
  });

  it('should create an action for IS_LOGGED_IN', () => {
    expect(authActions.notLoggedIn()).to.deep.equal({
      type: authTypes.NOT_LOGGED_IN,
    });
  });

  it('should create an action for LOGIN_ERROR', () => {
    expect(authActions.loginError('fakeError')).to.deep.equal({
      type: authTypes.LOGIN_ERROR,
      error: 'fakeError',
    });
  });

  it('should create an action for LOGOUT_REQUEST', () => {
    expect(authActions.logoutRequest()).to.deep.equal({
      type: authTypes.LOGOUT_REQUEST,
    });
  });

  it('should create an action for LOGOUT_SUCCESS', () => {
    expect(authActions.logoutSuccess({ isLoggedOut: true })).to.deep.equal({
      type: authTypes.LOGOUT_SUCCESS,
      action: { isLoggingOut: false },
    });
  });

  describe('action creators', () => {
    let callbackSpy;

    beforeEach(() => {
      callbackSpy = spy();
    });

    afterEach(() => {
      callbackSpy = null;
    });

    it('should return an action creator for LOGIN_REQUEST and AuthService.login', () => {
      const loginStub = stub(AuthService, 'login');
      authActions.loginUser()(callbackSpy);
      expect(callbackSpy.args[0]).to.deep.equal([{
        type: authTypes.LOGIN_REQUEST,
      }]);
      expect(loginStub.called).to.be.true; // eslint-disable-line no-unused-expressions
      AuthService.login.restore();
    });

    it('should return an action creator for LOGOUT_REQUEST and LOGOUT_SUCCESS with AuthService.logout', () => {
      const logoutStub = stub(AuthService, 'logout').resolves(false);

      return authActions.logoutUser()(callbackSpy).then(() => {
        expect(callbackSpy.args[0]).to.deep.equal([{
          type: authTypes.LOGOUT_REQUEST,
        }]);
        expect(logoutStub.called).to.be.true; // eslint-disable-line no-unused-expressions
        expect(callbackSpy.args[1]).to.deep.equal([{
          type: authTypes.LOGOUT_SUCCESS,
          action: { isLoggingOut: true },
        }]);
        AuthService.logout.restore();
      });
    });
  });
});
