import React from 'react';

import FooterGuidance from '../../../src/components/footer/guidance';

describe('<FooterGuidance />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterGuidance />);
  });

  it('renders element', () => {
    expect(wrapper.find('h6')).to.have.lengthOf(1);
  });
});
