import React from 'react';

import FooterAboutUs from '../../../src/components/footer/about-us';

describe('<FooterAboutUs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterAboutUs />); // eslint-disable-line react/jsx-filename-extension
  });

  it('Footer tag exists', () => {
    expect(wrapper.find('h6').length).toBe(1);
  });
});
