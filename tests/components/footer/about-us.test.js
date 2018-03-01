import React from 'react';
import { Link } from 'react-router-dom';

import FooterAboutUs from '../../../src/components/footer/about-us';

describe('<FooterAboutUs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterAboutUs />);
  });

  it('renders element', () => {
    expect(wrapper.find('h6')).to.have.lengthOf(1);
  });

  it('renders Links', () => {
    expect(wrapper.find(Link)).to.have.lengthOf(1);
  });
});
