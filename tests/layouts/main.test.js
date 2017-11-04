import React from 'react';

import Main from '../../src/layouts/main';
import SearchBar from '../../src/components/search-bar';

describe('Main', () => {
  const wrapper = shallow(<Main />);

  it('renders element', () => {
    expect(wrapper.find('.main').length).toBe(1);
  });

  it('renders Navigator', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });
});
