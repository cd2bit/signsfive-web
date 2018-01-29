import React from 'react';

import FooterGuidance from '../../../src/components/footer/guidance';

describe('<FooterGuidance />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterGuidance />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('h6').length).toBe(1);
  });
});
