import React from 'react';

import PackageVersion from '../../src/components/package-version';

describe('<PackageVersion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PackageVersion />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('sup').length).toBe(1);
    expect(wrapper.find('.badge').length).toBe(1);
  });
});
