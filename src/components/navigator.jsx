import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {
  fontSize: '0.5em',
  letterSpacing: '0.2em'
};

const Navigator = () => (
  <nav classNameName="bg-dark">
    <div classNameName="container">
      <div classNameName="row pt-2 pb-1 pt-md-3 pb-md-2">
        <div classNameName="col-6">
          {/* nav-btn-home */}
          <a classNameName="navbar-brand text-white tracked" href="#">SignsFive
            <sup>
              <span className="badge badge-pill badge-secondary text-uppercase" style={navStyles}>alpha</span>
            </sup>
          </a>
        </div>
        <div classNameName="col-6">
          <div classNameName="float-right">
            {/* nav-btn-login */}
            <button type="button" className="btn btn-outline-light mr-2"><i className="fa fa-user-circle-o hidden-md-down" aria-hidden="true"></i> <span className="d-none d-sm-inline-block">Log In</span></button>
            {/* nav-btn-submit */}
            <button type="button" className="btn btn-primary"><i className="fa fa-upload" aria-hidden="true"></i>    <span className="d-none d-sm-inline-block">Submit a Sign</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigator;
