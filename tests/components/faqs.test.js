import React from 'react';

import Faqs from '../../src/components/faqs';

describe('<Faqs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Faqs />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('h2').text()).to.have.string('FAQs');
  });
});
