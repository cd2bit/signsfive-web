import 'raf/polyfill';

import { matchers } from 'jest-json-schema';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { spy, stub, useFakeTimers } from 'sinon';

// we specify export as "chaiExpect", so we do not accidently override jest expect
import { assert, expect as chaiExpect } from 'chai';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.mount = mount;
global.render = render;

// Make Sinon functions available in all test files without importing
global.spy = spy;
global.stub = stub;
global.useFakeTimers = useFakeTimers;

// Make jest expect available in all test files
global.jestExpect = expect;
global.jestExpect.extend(matchers);

// Make Chai functions available in all test files without importing
global.assert = assert;
global.expect = chaiExpect;
