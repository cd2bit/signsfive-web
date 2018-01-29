import React from 'react';

import FooterAboutUs from '../../../src/components/footer/about-us';

describe('<FooterAboutUs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterAboutUs />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('h6').length).toBe(1);
  });
});
