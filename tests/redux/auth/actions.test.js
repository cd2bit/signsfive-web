import { authTypes, authActions } from '../../../src/redux/modules/auth';
import AuthService from '../../../src/utils/AuthService';

describe('(Actions) auth ', () => {
  let action;

  it('creates an action for LOGIN_REQUEST', () => {
    action = authActions.loginStatus();
    expect(action).to.deep.equal({
      type: authTypes.LOGIN_STATUS,
    });
  });

  it('creates an action for LOGIN_REQUEST', () => {
    action = authActions.loginRequest();
    expect(action).to.deep.equal({
      type: authTypes.LOGIN_REQUEST,
    });
  });

  it('creates an action for LOGIN_SUCCESS', () => {
    action = authActions.loginSuccess({
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
    });
    expect(action).to.deep.equal({
      type: authTypes.LOGIN_SUCCESS,
      idToken: 'foo',
      accessToken: 'bar',
      profile: { fakeProperty: 'fakeValue' },
    });
  });

  it('creates an action for IS_LOGGED_IN', () => {
    action = authActions.notLoggedIn();
    expect(action).to.deep.equal({
      type: authTypes.NOT_LOGGED_IN,
    });
  });

  it('creates an action for LOGIN_ERROR', () => {
    action = authActions.loginError('fakeError');
    expect(action).to.deep.equal({
      type: authTypes.LOGIN_ERROR,
      error: 'fakeError',
    });
  });

  it('creates an action for LOGOUT_REQUEST', () => {
    action = authActions.logoutRequest();
    expect(action).to.deep.equal({
      type: authTypes.LOGOUT_REQUEST,
    });
  });

  it('creates an action for LOGOUT_SUCCESS', () => {
    action = authActions.logoutSuccess({ isLoggedOut: true });
    expect(action).to.deep.equal({
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

    describe('LOGIN_REQUEST and AuthService.login', () => {
      let loginStub;

      beforeEach(() => {
        loginStub = stub(AuthService, 'login');
      });

      afterEach(() => {
        AuthService.login.restore();
      });

      it('returns an action creator', () => {
        authActions.loginUser()(callbackSpy);
        expect(callbackSpy.args[0]).to.deep.equal([{
          type: authTypes.LOGIN_REQUEST,
        }]);
        expect(loginStub.called).to.be.true;
      });
    });

    describe('LOGOUT_REQUEST and LOGOUT_SUCCESS with AuthService.logout', () => {
      let logoutStub;

      beforeEach(() => {
        logoutStub = stub(AuthService, 'logout').resolves(false);
      });

      afterEach(() => {
        AuthService.logout.restore();
      });

      it('returns an action creator', () => { // eslint-disable-line arrow-body-style
        return authActions.logoutUser()(callbackSpy).then(() => {
          expect(callbackSpy.args[0]).to.deep.equal([{
            type: authTypes.LOGOUT_REQUEST,
          }]);
          expect(logoutStub.called).to.be.true;
          expect(callbackSpy.args[1]).to.deep.equal([{
            type: authTypes.LOGOUT_SUCCESS,
            action: { isLoggingOut: true },
          }]);
        });
      });
    });
  });
});
