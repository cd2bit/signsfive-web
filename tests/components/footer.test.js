import React from 'react'
import Link from 'react-router-dom'
import Footer from '../../src/components/footer'


describe('<Footer />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it ('Wrapper exists', () => {
        expect(wrapper.exists())       
    });

});