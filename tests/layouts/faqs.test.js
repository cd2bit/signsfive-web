import React from 'react';

import Faqs from '../../src/layouts/faqs';

describe('<Faqs />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Faqs />); // eslint-disable-line react/jsx-filename-extension
  });

  it('Title tag present', () => {
    expect(wrapper.find('h2').text()).toEqual('FAQs');
  });
});
