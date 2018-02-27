import React from 'react';
import { Route } from 'react-router-dom';

import './styles/app.css';
import './styles/main.css';

import Header from './components/header';
import SearchBar from './components/search-bar';

import MainContainer from './containers/main';
import AboutContainer from './containers/about';
import FaqsContainer from './containers/faqs';

import Footer from './components/footer';

/**
 * this is App.
 */
const App = () => (
  <div className="App">
    <Header />
    <SearchBar />
    <div className="body container">
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/faqs" component={FaqsContainer} />
    </div>
    <Footer />
  </div>
);

export default App;
