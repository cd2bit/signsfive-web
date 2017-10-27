import React from 'react';

import SearchBar from '../../src/components/search-bar';

describe('SearchBar', () => {
  const wrapper = shallow(<SearchBar />);

  it('renders elements', () => {
    expect(wrapper.find('.search-bar').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
});
