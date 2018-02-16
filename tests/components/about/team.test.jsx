import React from 'react';

import Team from '../../../src/components/about/team';
import '../../../src/data/team.json';

import Member from '../../../src/components/about/member';

jest.mock('../../../src/data/team.json', () => ([
  {
    firstName: 'Foo',
    lastName: 'Bar',
    identity: 'binary',
    role: 'computer',
  },
  {
    firstName: 'Boo',
    lastName: 'Far',
    identity: 'plant',
    role: 'standby',
  },
]));

describe('<Team />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Team />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders element', () => {
    expect(wrapper.find('div')).to.have.lengthOf(2);
  });

  it('renders <Member />', () => {
    expect(wrapper.find(Member)).to.have.lengthOf(2);
  });
});
