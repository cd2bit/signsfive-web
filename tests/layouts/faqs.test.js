import React from 'react'
import Link from 'react-router-dom'
import Faqs from '../../src/layouts/faqs'


describe('<Faqs />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Faqs />);
    });

    it ('Faqs Wrapper exists', () => {
        expect(wrapper.exists())       
    });

});