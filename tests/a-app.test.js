import React from 'react';
import { Route } from 'react-router-dom';

import App from '../src/app';
import SearchBar from '../src/components/search-bar';

import Main from '../src/components/main';
import About from '../src/components/about';
import Faqs from '../src/components/faqs';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); // eslint-disable-line react/jsx-filename-extension
  });

  it('renders <SearchBar />', () => {
    expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
  });

  describe('renders correct routes', () => {
    let route;
    let routes;

    beforeEach(() => {
      routes = {};
      wrapper.find(Route).forEach((routeMap) => {
        const routeProps = routeMap.props();
        routes[routeProps.path] = routeProps.component;
      });
    });

    it('routes to Main', () => {
      route = routes['/'];
      expect(route).to.equal(Main);
      expect(route).not.to.equal(About);
      expect(route).not.to.equal(Faqs);
    });

    it('routes to About', () => {
      route = routes['/about'];
      expect(route).not.to.equal(Main);
      expect(route).to.equal(About);
      expect(route).not.to.equal(Faqs);
    });

    it('routes to Faqs', () => {
      route = routes['/faqs'];
      expect(route).not.to.equal(Main);
      expect(route).not.to.equal(About);
      expect(route).to.equal(Faqs);
    });
  });
});
