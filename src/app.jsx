import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './styles/app.css';


import Header from './layouts/header';
import Home from './layouts/main';
import About from './layouts/about';
import Faqs from './layouts/faqs';

import SearchBar from './components/search-bar';
import Footer from './components/footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchBar />
          <div className="body container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/faqs" component={Faqs} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
