import React from 'react';

import FooterChicagoBanner from '../../../src/components/footer/chicago-banner';

describe('<FooterChicagoBanner/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterChicagoBanner />); // eslint-disable-line react/jsx-filename-extension
  });

  it('FooterChicagoBanner tag exists', () => {
    expect(wrapper.find('i').length).toBe(1);
  });
});
