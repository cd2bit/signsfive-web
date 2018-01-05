import React from 'react';

import Footer from '../../src/components/footer';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />); // eslint-disable-line react/jsx-filename-extension
  });

  it('Footer tag exists', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });
});
