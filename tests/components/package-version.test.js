import React from 'react';

import PackageVersion from '../../src/components/package-version';

describe('<PackageVersion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PackageVersion />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('sup')).to.have.lengthOf(1);
    expect(wrapper.find('.badge')).to.have.lengthOf(1);
  });
});
