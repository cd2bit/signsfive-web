import React from 'react';
import { Link } from 'react-router-dom';

import Navigator from '../../src/components/navigator';

import PackageVersion from '../../src/components/package-version';
import SignInContainer from '../../src/containers/navigator/sign-in';
import SubmitASignContainer from '../../src/containers/navigator/submit-a-sign';

describe('<Navigator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigator />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('nav')).to.have.lengthOf(1);
    expect(wrapper.find('a')).to.have.lengthOf(1);
  });

  it('renders <PackageVersion />', () => {
    expect(wrapper.find(PackageVersion)).to.have.lengthOf(1);
  });

  it('renders <SignInContainer />', () => {
    expect(wrapper.find(SignInContainer)).to.have.lengthOf(1);
  });

  it('renders <SubmitASignContainer />', () => {
    expect(wrapper.find(SubmitASignContainer)).to.have.lengthOf(1);
  });

  // This will be next step once we implement the Links instead of a href
  xit('renders Links', () => {
    expect(wrapper.find(Link)).to.have.lengthOf(2);
  });
});
