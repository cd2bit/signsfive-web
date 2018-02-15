import React from 'react';

import About from '../../src/layouts/about';

// eslint-disable-next-line no-unused-vars, import/extensions, import/no-unresolved
import Loader from '../../src/lib/teamLoader';
// eslint-disable-next-line arrow-body-style
jest.mock('../../src/lib/teamLoader', () => {
  return { default: 'foobar' };
});

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('.about').length).toBe(1);
  });
});
