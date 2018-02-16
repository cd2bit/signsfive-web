import React from 'react';

import SearchBar from '../../src/components/search-bar';

describe('<SearchBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('.search-bar')).to.have.lengthOf(1);
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });
});
