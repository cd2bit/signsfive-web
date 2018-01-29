import React from 'react';

import FooterSocial from '../../../src/components/footer/social';

describe('<FooterSocial />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterSocial />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('a').length).toBe(3);
  });
});
