import React from 'react';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

// eslint-disable-next-line no-unused-vars, import/extensions, import/no-unresolved
import Loader from '../src/lib/teamLoader';
// eslint-disable-next-line arrow-body-style
jest.mock('../src/lib/teamLoader', () => {
  return { default: 'foobar' };
});

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });
});
