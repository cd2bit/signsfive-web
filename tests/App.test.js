import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });
});
