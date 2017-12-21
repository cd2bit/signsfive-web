import React from 'react'
import Link from 'react-router-dom'
import FooterChicagoBanner from '../../../src/components/footer/chicago-banner'
describe('<FooterChicagoBanner/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FooterChicagoBanner/>);
    });
    it('FooterChicagoBanner tag exists', () => {
        expect(wrapper.find("i").length).toBe(1)
    });
});