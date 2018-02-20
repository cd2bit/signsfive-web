import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Button } from 'reactstrap';

import SignInContainer, { SignIn } from '../../../src/containers/navigator/sign-in';
import { authTypes } from '../../../src/redux/modules/auth';
import AuthService from '../../../src/utils/AuthService';

describe('<SignIn />', () => {
  let wrapper;

  describe('Component', () => {
    let isAuthenticatedBool;
    let loginStatusSpy;
    let loginUserSpy;
    let logoutUserSpy;

    beforeEach(() => {
      isAuthenticatedBool = true;

      loginStatusSpy = spy();
      loginUserSpy = spy();
      logoutUserSpy = spy();

      wrapper = shallow(<SignIn // eslint-disable-line react/jsx-filename-extension
        isAuthenticated={isAuthenticatedBool}
        loginStatus={loginStatusSpy}
        loginUser={loginUserSpy}
        logoutUser={logoutUserSpy}
      />);
    });

    it('renders element', () => {
      expect(wrapper.find(Button)).to.have.lengthOf(1);
    });

    describe('.componentWillMount', () => {
      it('loginStatus is called', () => {
        expect(loginStatusSpy.called).to.be.true;
      });
    });

    describe('when isAuthenticated is true', () => {
      it('labels the button with "Log Out"', () => {
        expect(wrapper.find('span').text()).to.have.string('Log Out');
      });

      describe('.signInOrOut', () => {
        it('logoutUser is called', () => {
          wrapper.find(Button).simulate('click');
          expect(loginUserSpy.called).to.be.false;
          expect(logoutUserSpy.called).to.be.true;
        });
      });
    });

    describe('when isAuthenticated is false', () => {
      beforeEach(() => {
        isAuthenticatedBool = false;

        wrapper = shallow(<SignIn // eslint-disable-line react/jsx-filename-extension
          isAuthenticated={isAuthenticatedBool}
          loginStatus={loginStatusSpy}
          loginUser={loginUserSpy}
          logoutUser={logoutUserSpy}
        />);
      });

      it('labels the button with "Log In"', () => {
        expect(wrapper.find('span').text()).to.have.string('Log In');
      });

      describe('.signInOrOut', () => {
        it('loginUser is called', () => {
          wrapper.find(Button).simulate('click');
          expect(loginUserSpy.called).to.be.true;
          expect(logoutUserSpy.called).to.be.false;
        });
      });
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({
        authReducer: { isAuthenticated: true },
      });
      wrapper = shallow(<SignInContainer store={store} />);
    });

    describe('.mapStateToProps', () => {
      it('set props.isAuthenticated as true', () => {
        expect(wrapper.props().isAuthenticated).to.be.true;
      });

      it('set props.isAuthenticated as false', () => {
        store = mockStore({ authReducer: { isAuthenticated: false } });
        wrapper = shallow(<SignInContainer store={store} />);
        expect(wrapper.props().isAuthenticated).to.be.false;
      });
    });

    describe('.mapDispatchToProps', () => {
      let containerProps;

      beforeEach(() => {
        stub(AuthService, 'login');
        containerProps = wrapper.props();
      });

      afterEach(() => {
        AuthService.login.restore();
      });

      it('dispatches loginStatus', () => {
        expect(containerProps.loginStatus()).deep.equal({
          type: authTypes.LOGIN_STATUS,
        });
      });

      it('dispatches loginUser', () => {
        expect(containerProps.loginUser()).deep.equal({
          type: authTypes.LOGIN_REQUEST,
        });
      });

      it('dispatches logoutUser', (done) => {
        containerProps.logoutUser().then((response) => {
          setTimeout(() => {
            expect(response).deep.equal({
              type: authTypes.LOGOUT_SUCCESS,
              action: { isLoggingOut: false },
            });
            done();
          });
        });
      });
    });
  });
});
