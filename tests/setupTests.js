import 'raf/polyfill';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Chai functions available in all test files without importing
global.expect = expect;

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};
