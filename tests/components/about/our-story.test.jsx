import React from 'react';

import OurStory from '../../../src/components/about/our-story';

describe('<OurStory />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OurStory />);
  });

  it('renders elements', () => {
    const h3Wrapper = wrapper.find('h3');
    expect(h3Wrapper).to.have.lengthOf(1);
    expect(h3Wrapper.text()).have.string('Our Story');
    expect(wrapper.find('p')).to.have.lengthOf(3);
    expect(wrapper.find('ol')).to.have.lengthOf(1);
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });
});
