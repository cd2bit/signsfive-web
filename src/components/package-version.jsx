import React, { Component } from 'react';

const navStyles = {
  fontSize: '0.5em',
  letterSpacing: '0.2em',
};

class PackageVersion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      version: process.env.npm_package_version,
    };
  }

  render() {
    return (
      <sup>
        <span className="badge badge-pill badge-secondary text-uppercase" style={navStyles}>
          alpha {this.state.version}
        </span>
      </sup>
    );
  }
}

export default PackageVersion;

