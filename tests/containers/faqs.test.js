import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import FaqsContainer, { Faqs } from '../../src/containers/faqs';
import { a11yTypes } from '../../src/redux/modules/a11y';

describe('<Faqs />', () => {
  let wrapper;

  describe('Component', () => {
    let setA11yNavigatedMessageSpy;

    beforeEach(() => {
      setA11yNavigatedMessageSpy = spy();

      wrapper = shallow(<Faqs // eslint-disable-line react/jsx-filename-extension
        setA11yNavigatedMessage={setA11yNavigatedMessageSpy}
      />);
    });

    it('renders element', () => {
      expect(wrapper.find('h2').text()).to.have.string('FAQs');
    });

    describe('.componentWillMount', () => {
      it('setA11yNavigatedMessage is called', () => {
        expect(setA11yNavigatedMessageSpy.called).to.be.true;
        expect(setA11yNavigatedMessageSpy.args[0][0]).to.have.string('FAQs');
      });
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({});
      wrapper = shallow(<FaqsContainer store={store} />);
    });

    describe('.mapDispatchToProps', () => {
      let containerProps;

      beforeEach(() => {
        containerProps = wrapper.props();
      });

      it('dispatches setA11yNavigatedMessage', () => {
        expect(containerProps.setA11yNavigatedMessage('FooBar FAQs')).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar FAQs',
        });
      });
    });
  });
});
