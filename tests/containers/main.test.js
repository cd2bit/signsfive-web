import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import MainContainer, { Main } from '../../src/containers/main';
import { a11yTypes } from '../../src/redux/modules/a11y';

describe('<Main />', () => {
  let wrapper;

  describe('Component', () => {
    let setA11yNavigatedMessageSpy;

    beforeEach(() => {
      setA11yNavigatedMessageSpy = spy();

      wrapper = shallow(<Main // eslint-disable-line react/jsx-filename-extension
        setA11yNavigatedMessage={setA11yNavigatedMessageSpy}
      />);
    });

    it('renders element', () => {
      expect(wrapper.find('.main')).to.have.lengthOf(1);
    });

    describe('.componentWillMount', () => {
      it('setA11yNavigatedMessage is called', () => {
        expect(setA11yNavigatedMessageSpy.called).to.be.true;
        expect(setA11yNavigatedMessageSpy.args[0][0]).to.have.string('Home');
      });
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