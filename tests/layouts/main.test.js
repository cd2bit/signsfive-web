import React from 'react';

import Main from '../../src/layouts/main';

describe('<Main />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders element', () => {
    expect(wrapper.find('.main').length).toBe(1);
  });

 
});
