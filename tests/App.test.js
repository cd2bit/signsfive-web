import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div); // eslint-disable-line react/jsx-filename-extension
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });
});
