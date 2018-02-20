import { authTypes } from '../../../src/redux/modules/auth';
import authMiddleware from '../../../src/redux/modules/auth/middleware';
import AuthService from '../../../src/utils/AuthService';

// NOTE: Copied majority middleware test from react-thunk
// https://github.com/gaearon/redux-thunk/blob/master/test/index.js
describe('(Middleware) auth ', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  let nextHandler = authMiddleware({
    dispatch: doDispatch,
    getState: doGetState,
  });
  let actionHandler;

  it('return a function to handle next', () => {
    assert.isFunction(nextHandler);
    assert.strictEqual(nextHandler.length, 1);
  });

  describe('handle next', () => {
    it('must return a function to handle action', () => {
      actionHandler = nextHandler();

      assert.isFunction(actionHandler);
      assert.strictEqual(actionHandler.length, 1);
    });

    describe('handle action', () => {
      let nextSpy;
      let dispatchSpy;

      beforeEach(() => {
        nextSpy = spy();
        dispatchSpy = spy();
        nextHandler = authMiddleware({ dispatch: dispatchSpy });
        actionHandler = nextHandler(nextSpy);
      });

      describe('when action type LOGIN_STATUS are not dispatched', () => {
        it('skip authMiddleware and does not dispatch anything', (done) => {
          actionHandler({});
          setTimeout(() => {
            expect(nextSpy.called).to.be.true;
            expect(dispatchSpy.called).to.be.false;
            done();
          }, 200);
        });
      });

      describe('when action type LOGIN_STATUS are dispatched', () => {
        let handleAuthenticationStub;
        let isAuthenticatedStub;

        beforeEach(() => {
          handleAuthenticationStub = stub(AuthService, 'handleAuthentication');
          isAuthenticatedStub = stub(AuthService, 'isAuthenticated');
        });

        afterEach(() => {
          AuthService.handleAuthentication.restore();
          AuthService.isAuthenticated.restore();
        });

        describe('when handleAuthentication returns false', () => {
          beforeEach(() => {
            handleAuthenticationStub.resolves(false);
          });

          describe('when isAuthenticated returns false', () => {
            it('dispatches NOT_LOGGED_IN', (done) => {
              isAuthenticatedStub.returns(false);

              actionHandler({ type: authTypes.LOGIN_STATUS });

              setTimeout(() => {
                expect(nextSpy.called).to.be.true;
                expect(dispatchSpy.called).to.be.true;
                expect(dispatchSpy.args[0]).to.deep.equal([{
                  type: authTypes.NOT_LOGGED_IN,
                }]);
                done();
              }, 200);
            });
          });

          describe('when isAuthenticated returns true', () => {
            it('dispatches IS_LOGGED_IN', (done) => {
              isAuthenticatedStub.returns(true);

              actionHandler({ type: authTypes.LOGIN_STATUS });

              setTimeout(() => {
                expect(nextSpy.called).to.be.true;
                expect(dispatchSpy.called).to.be.true;
                expect(dispatchSpy.args[0]).to.deep.equal([{
                  type: authTypes.IS_LOGGED_IN,
                }]);
                done();
              }, 200);
            });
          });
        });

        describe('when handleAuthentication returns other than false', () => {
          it('dispatches LOGIN_SUCCESS with tokens and profile', (done) => {
            handleAuthenticationStub.resolves({
              idToken: 'fakeId',
              accessToken: 'fakeAccess',
              profile: 'fakeProfile',
            });

            actionHandler({ type: authTypes.LOGIN_STATUS });

            setTimeout(() => {
              expect(nextSpy.called).to.be.true;
              expect(dispatchSpy.called).to.be.true;
              expect(dispatchSpy.args[0]).to.deep.equal([{
                type: authTypes.LOGIN_SUCCESS,
                idToken: 'fakeId',
                accessToken: 'fakeAccess',
                profile: 'fakeProfile',
              }]);
              done();
            }, 200);
          });
        });

        describe('when handleAuthentication catches errors', () => {
          xit('should handle catch errors here', () => {
          });
        });
      });
    });
  });
});
