import React from 'react';

import Member from '../../../src/components/about/member';
import '../../../src/lib/team-loader';

jest.mock('../../../src/lib/team-loader', () => ({ default: path => path }));

describe('<Member />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Member
      data={{
        firstName: 'Foo',
        lastName: 'Bar',
        identity: 'binary',
        role: 'computer',
      }}
    />);
  });

  it('renders elements with first and last name data', () => {
    const { src, alt } = wrapper.find('img').props();
    expect(src).to.have.string('./FooBar.png');
    expect(alt).to.have.string('Profile Photography of Foo Bar');
    expect(wrapper.find('strong').text()).to.have.string('Foo Bar');
  });

  it('renders element with "identity" data', () => {
    expect(wrapper.find('.about-team--identity').text()).to.have.string('binary');
  });

  it('renders element with "role" data', () => {
    expect(wrapper.find('p').at(1).text()).to.have.string('computer');
  });
});
