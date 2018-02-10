import React, { Component } from 'react';


export default class SubmitASign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div className="row">
        <div className="col-md-6">
          <h2>Let{"'"}s Upload!</h2>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-primary px-4 float-right d-none d-md-block">Upload</button>
        </div>
      </div>


    );
  }
}
