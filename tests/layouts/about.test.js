import React from 'react';

import About from '../../src/layouts/about';

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('.about').length).toBe(1);
  });
});
