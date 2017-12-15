import React from 'react'
import Link from 'react-router-dom'
import Footer from '../../src/components/footer'


describe('<Footer />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it ('Footer tag exists', () => {
        expect(wrapper.find('footer').length).toBe(1)    
    });

});