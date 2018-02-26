import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import withAccessible from '../../../src/containers/hoc/enhance-accessibility';

describe('<AccessibleHOC />', () => {
  let MockComponent;
  let WrapperMockComponent;
  let wrapper;
  let mockStore;
  let store;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
    MockComponent = () => <div className="mockComponent" />; // eslint-disable-line react/jsx-filename-extension
    WrapperMockComponent = withAccessible(MockComponent);
    wrapper = mount(<WrapperMockComponent store={store} />);
  });

  // currently this is broken but i feel we are very close!
  xit('renders the wrapped component as the root element in the connect HOC', () => {
    console.log('wrapperwrapperwrapperwrapper', wrapper.WrappedComponent);
    expect(wrapper.find(withAccessible)).to.equal(withAccessible);
    expect(wrapper.first().first()).to.equal(MockComponent);
  });

  it('renders wrapped element', () => {
    expect(wrapper.find(MockComponent)).to.have.lengthOf(1);
  });
});
