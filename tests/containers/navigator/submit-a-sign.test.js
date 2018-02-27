import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Button } from 'reactstrap';

import SubmitASignContainer, { SubmitASign } from '../../../src/containers/navigator/submit-a-sign';

describe('<SubmitASign />', () => {
  let wrapper;

  describe('Component', () => {
    let isAuthenticatedBool;

    beforeEach(() => {
      isAuthenticatedBool = true;

      wrapper = shallow(<SubmitASign
        isAuthenticated={isAuthenticatedBool}
      />);
    });

    describe('when isAuthenticated is true', () => {
      it('renders element with button', () => {
        expect(wrapper.find(Button)).to.have.lengthOf(1);
        expect(wrapper.find('span')).to.have.lengthOf(1);
      });

      it('labels the button with "Log Out"', () => {
        expect(wrapper.find('span').text()).to.have.string('Submit a Sign');
      });
    });

    describe('when isAuthenticated is false', () => {
      it('renders element without button', () => {
        isAuthenticatedBool = false;
        wrapper = shallow(<SubmitASign
          isAuthenticated={isAuthenticatedBool}
        />);

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
      it('set props.isAuthenticated as true', () => {
        store = mockStore({ authReducer: { isAuthenticated: true } });
        wrapper = shallow(<SubmitASignContainer store={store} />);
        expect(wrapper.props().isAuthenticated).to.be.true;
      });

      it('set props.isAuthenticated as false', () => {
        store = mockStore({ authReducer: { isAuthenticated: false } });
        wrapper = shallow(<SubmitASignContainer store={store} />);
        expect(wrapper.props().isAuthenticated).to.be.false;
      });
    });
  });
});
