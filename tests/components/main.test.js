import React from 'react';

import Main from '../../src/components/main';

describe('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('.main')).to.have.lengthOf(1);
  });
});
