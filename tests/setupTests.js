import 'raf/polyfill';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { spy, stub } from 'sinon';

import { expect } from 'chai';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.mount = mount;
global.render = render;

// Make Sinon functions available in all test files without importing
global.spy = spy;
global.stub = stub;

// Make Chai functions available in all test files without importing
global.expect = expect;

