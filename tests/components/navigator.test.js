import React from 'react';
import { Link } from 'react-router-dom';

import Navigator from '../../src/components/navigator';

describe('Navigator', () => {
  const wrapper = shallow(<Navigator />);

  it('renders elements', () => {
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
  });

  it('renders Links', () => {
    expect(wrapper.find(Link).length).toBe(2);
  });
});
