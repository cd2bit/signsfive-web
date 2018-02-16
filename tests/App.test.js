import React from 'react';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
  });
});
