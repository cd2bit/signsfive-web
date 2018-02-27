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
    wrapper = shallow(<App />);
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
      route = routes['/'].WrappedComponent;
      expect(route).to.equal(Main);
      expect(route).to.not.equal(About);
      expect(route).to.not.equal(Faqs);
    });

    it('routes to About', () => {
      route = routes['/about'].WrappedComponent;
      expect(route).to.not.equal(Main);
      expect(route).to.equal(About);
      expect(route).to.not.equal(Faqs);
    });

    it('routes to Faqs', () => {
      route = routes['/faqs'].WrappedComponent;
      expect(route).to.not.equal(Main);
      expect(route).to.not.equal(About);
      expect(route).to.equal(Faqs);
    });
  });
});
