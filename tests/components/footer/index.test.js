import React from 'react';

import Footer from '../../../src/components/footer';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders footer element', () => {
    expect(wrapper.find('footer')).to.have.lengthOf(1);
  });
});
