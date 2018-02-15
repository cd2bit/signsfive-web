import React from 'react';
import { Link } from 'react-router-dom';

const FooterAboutUs = () => (
  <div className="col-md-2 tracked">
    <div className="float-md-right text-md-left">
      <h6 className="footer-type text-uppercase text-secondary">Connect</h6>
      <ul className="footer-type list-unstyled">
        <li className="py-1">
          <Link to="/about" className="text-dark">
            About us
          </Link>
        </li>
        <li className="py-1">
          <a href="#email" className="text-dark">
            Email
          </a>
        </li>
        <li className="py-1">
          <a href="#blog" className="text-dark">
            Blog
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default FooterAboutUs;
