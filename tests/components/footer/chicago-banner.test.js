import React from 'react';

import FooterChicagoBanner from '../../../src/components/footer/chicago-banner';

describe('<FooterChicagoBanner/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterChicagoBanner />);
  });

  it('renders element', () => {
    expect(wrapper.find('i')).to.have.lengthOf(1);
  });
});
