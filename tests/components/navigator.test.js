import React from 'react';
import { Link } from 'react-router-dom';

import Navigator from '../../src/components/navigator';

describe('<Navigator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigator />);
  });

  it('renders elements', () => {
    expect(wrapper.find('.navbar').length).toBe(1);
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('a').length).toBe(1);
  });

  // This will be next step once we implement the Links instead of a href
  xit('renders Links', () => {
    expect(wrapper.find(Link).length).toBe(2);
  });
});
