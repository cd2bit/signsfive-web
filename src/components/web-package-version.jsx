import React from 'react';

const navStyles = {
  fontSize: '0.5em',
  letterSpacing: '0.2em',
};

const WebPackageVersion = () => (
  <sup>
    <span className="badge badge-pill badge-secondary text-uppercase" style={navStyles}>
      alpha {process.env.REACT_APP_VERSION}
    </span>
  </sup>
);

export default WebPackageVersion;
