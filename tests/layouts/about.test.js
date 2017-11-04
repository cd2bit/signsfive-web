import React from 'react';

import About from '../../src/layouts/about';

describe('About', () => {
  const wrapper = shallow(<About />);

  it('renders element', () => {
    expect(wrapper.find('.about').length).toBe(1);
  });
});
