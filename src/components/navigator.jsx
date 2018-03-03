import React from 'react';

import PackageVersion from './package-version';
import SignInContainer from '../containers/navigator/sign-in';
import SubmitASignContainer from '../containers/navigator/submit-a-sign';

const Navigator = () => (
  <nav className="bg-dark">
    <div className="container">
      <div className="row pt-2 pb-1 pt-md-3 pb-md-2">
        <div className="col-6">
          <a className="navbar-brand text-white tracked" href="#home">
            SignsFive
            <PackageVersion />
          </a>
        </div>
        <div className="col-6">
          <div className="float-right">
            <SignInContainer />
            <SubmitASignContainer />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigator;
