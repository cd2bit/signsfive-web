import React from 'react';
import { Route } from 'react-router-dom';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

import { Main } from '../src/containers/main';
import { About } from '../src/containers/about';
import { Faqs } from '../src/containers/faqs';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
  });

  describe('renders correct routes', () => {
    let routes;

    beforeEach(() => {
      routes = {};
      wrapper.find(Route).forEach((routeMap) => {
        const routeProps = routeMap.props();
        routes[routeProps.path] = routeProps.component;
      });
    });

    it('routes to Main', () => {
      expect(routes['/'].WrappedComponent).to.equal(Main);
      expect(routes['/'].WrappedComponent).to.not.equal(About);
      expect(routes['/'].WrappedComponent).to.not.equal(Faqs);
    });

    it('routes to About', () => {
      expect(routes['/about'].WrappedComponent).to.not.equal(Main);
      expect(routes['/about'].WrappedComponent).to.equal(About);
      expect(routes['/about'].WrappedComponent).to.not.equal(Faqs);
    });

    it('routes to Faqs', () => {
      expect(routes['/faqs'].WrappedComponent).to.not.equal(Main);
      expect(routes['/faqs'].WrappedComponent).to.not.equal(About);
      expect(routes['/faqs'].WrappedComponent).to.equal(Faqs);
    });
  });
});
