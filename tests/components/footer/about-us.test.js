import React from 'react'
import Link from 'react-router-dom'
import FooterAboutUs from "../../../src/components/footer/about-us";

describe('<FooterAboutUs />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FooterAboutUs /> );
    });
    it('Footer tag exists', () => {
        expect(wrapper.find('h6').length).toBe(1)
    });
});