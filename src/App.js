import React, { Component } from 'react';

import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: null };
  }

  componentWillMount() {
    const readmePath = require('./TEAM.md');
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }

  render() {
    const { markdown } = this.state;

    return (
      <div className="App">
        <div dangerouslySetInnerHTML={{__html: markdown}}></div>
      </div>
    );
  }
}

export default App;
