import React from 'react';

import About from '../../../src/components/about';

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('.about')).to.have.lengthOf(1);
  });
});
