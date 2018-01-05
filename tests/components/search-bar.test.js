import React from 'react';

import SearchBar from '../../src/components/search-bar';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('.search-bar').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
});
