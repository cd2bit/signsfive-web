import React from 'react';

import AccessibleHOC from '../../../src/containers/hoc/enhance-accessibility';

describe('<AccessibleHOC />', () => {
  let MockComponent;
  let WrapperMockComponent;
  let wrapper;

  beforeEach(() => {
    MockComponent = () => (<div className="mockComponent" />); // eslint-disable-line react/jsx-filename-extension
    WrapperMockComponent = AccessibleHOC(MockComponent);
    wrapper = shallow(<WrapperMockComponent />);
  });

  xit('renders the wrapped component as the root element in the connect HOC', () => {
    expect(wrapper.first()).to.equal(AccessibleHOC);
    expect(wrapper.first().first()).to.equal(MockComponent);
  });

  xit('renders wrapped element', () => {
    expect(wrapper.find(MockComponent)).to.have.lengthOf(1);
  });
});
