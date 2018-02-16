import React from 'react';

import OurName from '../../../src/components/about/our-name';

describe('<OurName />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OurName />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    const h3Wrapper = wrapper.find('h3');
    expect(h3Wrapper).to.have.lengthOf(1);
    expect(h3Wrapper.text()).have.string('Our Name');
    expect(wrapper.find('p')).to.have.lengthOf(3);
    expect(wrapper.find('section')).to.have.lengthOf(1);
  });
});
