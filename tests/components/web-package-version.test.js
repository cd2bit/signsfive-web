import React from 'react';

import WebPackageVersion from '../../src/components/web-package-version';

describe('<WebPackageVersion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WebPackageVersion />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('sup').length).toBe(1);
    expect(wrapper.find('.badge').length).toBe(1);
  });
});
