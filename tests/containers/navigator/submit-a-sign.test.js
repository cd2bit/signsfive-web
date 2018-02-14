import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import SubmitASignContainer, { SubmitASign } from '../../../src/containers/navigator/submit-a-sign';

describe('<SubmitASign />', () => {
  let wrapper;

  describe('Component', () => {
    let isAuthenticatedBool;

    beforeEach(() => {
      isAuthenticatedBool = true;

      wrapper = shallow(<SubmitASign // eslint-disable-line react/jsx-filename-extension
        isAuthenticated={isAuthenticatedBool}
      />);
    });

    describe('when isAuthenticated is true', () => {
      it('renders element with button', () => {
        expect(wrapper.find('button')).to.have.lengthOf(1);
        expect(wrapper.find('span')).to.have.lengthOf(1);
      });

      it('labels the button with "Log Out"', () => {
        expect(wrapper.find('span').text()).to.have.string('Submit a Sign');
      });
    });

    describe('when isAuthenticated is false', () => {
      it('renders element without button', () => {
        isAuthenticatedBool = false;
        wrapper = shallow(<SubmitASign // eslint-disable-line react/jsx-filename-extension
          isAuthenticated={isAuthenticatedBool}
        />);

        expect(wrapper.find('button')).to.have.lengthOf(0);
        expect(wrapper.find('span')).to.have.lengthOf(1);
      });
    });
  });

  describe('Container', () => {
    const mockStore = configureStore([thunk]);
    let store;
    let containerWrapper;

    describe('.mapStateToProps', () => {
      it('set props.isAuthenticated as true', () => {
        store = mockStore({ authReducer: { isAuthenticated: true } });
        containerWrapper = shallow(<SubmitASignContainer store={store} />);
        expect(containerWrapper.props().isAuthenticated).to.be.true;
      });

      it('set props.isAuthenticated as true', () => {
        store = mockStore({ authReducer: { isAuthenticated: false } });
        containerWrapper = shallow(<SubmitASignContainer store={store} />);
        expect(containerWrapper.props().isAuthenticated).to.be.false;
      });
    });
  });
});
