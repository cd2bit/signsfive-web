import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import AboutContainer, { About } from '../../src/containers/about';
import { a11yTypes } from '../../src/redux/modules/a11y';

describe('<About />', () => {
  let wrapper;

  describe('Component', () => {
    beforeEach(() => {
      wrapper = shallow(<About />);
    });

    it('renders element', () => {
      expect(wrapper.find('.about')).to.have.lengthOf(1);
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({});
      wrapper = shallow(<AboutContainer store={store} />);
    });

    describe('.mapDispatchToProps', () => {
      let containerProps;

      beforeEach(() => {
        containerProps = wrapper.props();
      });

      it('dispatches setA11yNavigatedMessage', () => {
        expect(containerProps.setA11yNavigatedMessage('FooBar About')).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar About',
        });
      });
    });
  });
});
