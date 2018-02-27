import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import MainContainer, { Main } from '../../src/containers/main';
import { a11yTypes } from '../../src/redux/modules/a11y';

describe('<Main />', () => {
  let wrapper;

  describe('Component', () => {
    beforeEach(() => {
      wrapper = shallow(<Main />);
    });

    it('renders element', () => {
      expect(wrapper.find('.main')).to.have.lengthOf(1);
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({});
      wrapper = shallow(<MainContainer store={store} />);
    });

    describe('.mapDispatchToProps', () => {
      let containerProps;

      beforeEach(() => {
        containerProps = wrapper.props();
      });

      it('dispatches setA11yNavigatedMessage', () => {
        expect(containerProps.setA11yNavigatedMessage('FooBar Main')).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar Main',
        });
      });
    });
  });
});
