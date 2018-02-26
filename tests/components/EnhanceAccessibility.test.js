import React from 'react';

import AccessibleHOC from '../../src/components/EnhanceAccessibility';

describe('<AccessibleHOC />', () => {
  let MockComponent;
  let WrapperMockComponent;
  let wrapper;

  beforeEach(() => {
    MockComponent = () => (<div className="mockComponent" />); // eslint-disable-line react/jsx-filename-extension
    WrapperMockComponent = AccessibleHOC(MockComponent);
    wrapper = shallow(<WrapperMockComponent />);
  });

  it('renders the wrapped component as the root element in the connect HOC', () => {
    expect(wrapper.first()).to.equal(AccessibleHOC);
    expect(wrapper.first().first()).to.equal(MockComponent);
  });

  it('renders wrapped element', () => {
    expect(wrapper.find(MockComponent)).to.have.lengthOf(1);
  });
});
