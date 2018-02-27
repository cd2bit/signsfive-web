import React from 'react';

import FooterAboutUs from '../../../src/components/footer/about-us';

describe('<FooterAboutUs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterAboutUs />);
  });

  it('renders element', () => {
    expect(wrapper.find('h6')).to.have.lengthOf(1);
  });
});
