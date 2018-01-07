import React from 'react';
// import { Link } from 'react-router-dom';

import SignIn from './buttons/sign-in';
import SubmitASign from './buttons/submit-a-sign';

const navStyles = {
  fontSize: '0.5em',
  letterSpacing: '0.2em',
};

const Navigator = () => (
  <nav className="bg-dark">
    <div className="container">
      <div className="row pt-2 pb-1 pt-md-3 pb-md-2">
        <div className="col-6">
          <a className="navbar-brand text-white tracked" href="#home">
            SignsFive
            <sup>
              <span className="badge badge-pill badge-secondary text-uppercase" style={navStyles}>
                alpha
              </span>
            </sup>
          </a>
        </div>
        <div className="col-6">
          <div className="float-right">
            <SignIn />
            <SubmitASign />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigator;
