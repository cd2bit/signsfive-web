import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import makeAccessibleRoute, { ScreenReaderAccessibleComponent } from '../../../src/containers/hoc/enhance-accessibility';
import { a11yTypes } from '../../../src/redux/modules/a11y';

describe('<AccessibleHOC />', () => {
  let MockComponent;
  let WrapperMockComponent;
  let wrapper;

  beforeEach(() => {
    MockComponent = () => <div className="mockComponent" />;
  });

  describe('ScreenReaderAccessibleComponent', () => {
    let setA11yNavigatedMessageSpy;

    beforeEach(() => {
      setA11yNavigatedMessageSpy = spy();
      WrapperMockComponent = ScreenReaderAccessibleComponent(MockComponent);
      wrapper = mount(<WrapperMockComponent // eslint-disable-line react/jsx-closing-tag-location
        setA11yNavigatedMessage={setA11yNavigatedMessageSpy}
      />);
    });

    it('renders element', () => {
      expect(wrapper.find('.mockComponent')).to.have.lengthOf(1);
    });

    describe('.componentWillMount', () => {
      it('setA11yNavigatedMessage is called', () => {
        expect(setA11yNavigatedMessageSpy.called).to.be.true;
        expect(setA11yNavigatedMessageSpy.args[0][0]).to.have.string('Mock Component');
      });
    });
  });

  describe('makeAccessibleRoute { Container }', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({});
      WrapperMockComponent = makeAccessibleRoute(MockComponent);
      wrapper = mount(<Provider store={store}>
        <WrapperMockComponent />
      </Provider>); // eslint-disable-line react/jsx-closing-tag-location
    });

    describe('.mapDispatchToProps', () => {
      it('dispatches setA11yNavigatedMessage', () => {
        const { setA11yNavigatedMessage } = wrapper.find(MockComponent).props();
        const action = setA11yNavigatedMessage('FooBar A11y');
        expect(action).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar A11y',
        });
      });
    });
  });
});
