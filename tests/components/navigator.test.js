import React from 'react';
import { Link } from 'react-router-dom';

import Navigator from '../../src/components/navigator';

import WebPackageVersion from '../../src/components/web-package-version';
import SignInContainer from '../../src/containers/navigator/sign-in';
import SubmitASignContainer from '../../src/containers/navigator/submit-a-sign';

describe('<Navigator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigator />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('renders <WebPackageVersion />', () => {
    expect(wrapper.find(WebPackageVersion).length).toBe(1);
  });

  it('renders <SignInContainer />', () => {
    expect(wrapper.find(SignInContainer).length).toBe(1);
  });

  it('renders <SubmitASignContainer />', () => {
    expect(wrapper.find(SubmitASignContainer).length).toBe(1);
  });

  // This will be next step once we implement the Links instead of a href
  xit('renders Links', () => {
    expect(wrapper.find(Link).length).toBe(2);
  });
});
