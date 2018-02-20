import React from 'react';
import { Route } from 'react-router-dom';

import './styles/app.css';
import './styles/main.css';

import Header from './components/header';
import SearchBar from './components/search-bar';

import Main from './components/main';
import About from './components/about';
import Faqs from './components/faqs';

import Footer from './components/footer';

/**
 * this is App.
 */
const App = () => (
  <div className="App">
    <Header />
    <SearchBar />
    <div className="body container">
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faqs" component={Faqs} />
    </div>
    <Footer />
  </div>
);

export default App;
