import React from 'react';
import { Link } from 'react-router-dom';

import Navigator from '../../src/components/navigator';

import SignIn from '../../src/components/buttons/sign-in';
import SubmitASign from '../../src/components/buttons/submit-a-sign';

describe('<Navigator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigator />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders elements', () => {
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('renders <SignIn />', () => {
    expect(wrapper.find(SignIn).length).toBe(1);
  });

  it('renders <SubmitASign />', () => {
    expect(wrapper.find(SubmitASign).length).toBe(1);
  });

  // This will be next step once we implement the Links instead of a href
  xit('renders Links', () => {
    expect(wrapper.find(Link).length).toBe(2);
  });
});
