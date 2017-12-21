import React from 'react'
import Link from 'react-router-dom'
import Faqs from '../../src/layouts/faqs'


describe('<Faqs />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Faqs />);
    });

    it ('Title tag present', () => {
        expect(wrapper.find('h2').text()).toEqual('FAQs')   
    });

});