import React from 'react';

import Main from '../../src/layouts/main';
import SearchBar from '../../src/components/search-bar';

describe('<Main />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders element', () => {
    expect(wrapper.find('.main').length).toBe(1);
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });
});
