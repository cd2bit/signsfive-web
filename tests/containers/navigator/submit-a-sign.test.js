import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Button } from 'reactstrap';

import SubmitASignContainer, { SubmitASign } from '../../../src/containers/navigator/submit-a-sign';

describe('<SubmitASign />', () => {
  let wrapper;

  describe('Component', () => {
    let isAuthenticatedBool;

    describe('when isAuthenticated is true', () => {
      beforeEach(() => {
        isAuthenticatedBool = true;
        wrapper = shallow(<SubmitASign
          isAuthenticated={isAuthenticatedBool}
        />);
      });

      it('renders element with button', () => {
        expect(wrapper.find(Button)).to.have.lengthOf(1);
        expect(wrapper.find('span')).to.have.lengthOf(1);
      });

      it('labels the button with "Log Out"', () => {
        expect(wrapper.find('span').text()).to.have.string('Submit a Sign');
      });
    });

    describe('when isAuthenticated is false', () => {
      beforeEach(() => {
        isAuthenticatedBool = false;
        wrapper = shallow(<SubmitASign
          isAuthenticated={isAuthenticatedBool}
        />);
      });

      it('renders element without button', () => {
        expect(wrapper.find(Button)).to.have.lengthOf(0);
        expect(wrapper.find('span')).to.have.lengthOf(1);
      });
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
    });

    describe('.mapStateToProps', () => {
      describe('when authReducer.isAuthenticated is true', () => {
        beforeEach(() => {
          store = mockStore({ authReducer: { isAuthenticated: true } });
          wrapper = shallow(<SubmitASignContainer store={store} />);
        });

        it('set props.isAuthenticated as true', () => {
          const { isAuthenticated } = wrapper.props();
          expect(isAuthenticated).to.be.true;
        });
      });

      describe('when authReducer.isAuthenticated is false', () => {
        beforeEach(() => {
          store = mockStore({ authReducer: { isAuthenticated: false } });
          wrapper = shallow(<SubmitASignContainer store={store} />);
        });

        it('set props.isAuthenticated as false', () => {
          const { isAuthenticated } = wrapper.props();
          expect(isAuthenticated).to.be.false;
        });
      });
    });
  });
});
