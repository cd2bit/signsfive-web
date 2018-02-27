import React from 'react';

import Header from '../../src/components/header';
import Navigator from '../../src/components/navigator';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders element', () => {
    expect(wrapper.find('.header')).to.have.lengthOf(1);
  });

  it('renders <Navigator />', () => {
    expect(wrapper.find(Navigator)).to.have.lengthOf(1);
  });
});
