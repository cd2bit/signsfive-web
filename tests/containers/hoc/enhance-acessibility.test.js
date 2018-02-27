import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import withAccessible from '../../../src/containers/hoc/enhance-accessibility';
import { a11yTypes } from '../../../src/redux/modules/a11y';

describe('<AccessibleHOC />', () => {
  let MockComponent;
  let WrapperMockComponent;
  let wrapper;
  let mockStore;
  let store;
  let setA11yNavigatedMessageSpy;
  let containerProps;

  beforeEach(() => {
    setA11yNavigatedMessageSpy = spy();
    mockStore = configureStore([thunk]);
    store = mockStore();
    MockComponent = () => <div className="mockComponent" />; // eslint-disable-line react/jsx-filename-extension
    WrapperMockComponent = withAccessible(MockComponent);
    wrapper = mount(<Provider store={store} test={{ foo: true }}>
      <WrapperMockComponent />
    </Provider>); // eslint-disable-line react/jsx-closing-tag-location
  });

  describe('Component', () => {
    it('renders wrapped element', () => {
      expect(wrapper.find(MockComponent)).to.have.lengthOf(1);
    });

    describe('.componentWillMount', () => {
      it('setA11yNavigatedMessage is called', () => {
        containerProps = wrapper.find(MockComponent).props();
        containerProps.setA11yNavigatedMessage = setA11yNavigatedMessageSpy;
        expect(setA11yNavigatedMessageSpy.called).to.be.true;
        expect(setA11yNavigatedMessageSpy.args[0][0]).to.have.string('FAQs');
      });
    });
  });

  describe('Container', () => {
    describe('.mapDispatchToProps', () => {
      

      beforeEach(() => {
        containerProps = wrapper.find(MockComponent).props();
      });

      it('dispatches setA11yNavigatedMessage', () => {
        expect(containerProps.setA11yNavigatedMessage('FooBar About')).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar About',
        });
      });
    });
  });

  // currently this is broken but i feel we are very close!
  xit('renders the wrapped component as the root element in the connect HOC', () => {
    console.log('wrapperwrapperwrapperwrapper', wrapper.WrappedComponent);
    expect(wrapper.find(withAccessible)).to.equal(withAccessible);
    expect(wrapper.first().first()).to.equal(MockComponent);
  });
});
