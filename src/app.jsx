import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/app.css';

import Header from './layouts/header';
import Home from './layouts/main';
import About from './layouts/about';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
