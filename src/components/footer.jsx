import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogin from './footer/login';
import FooterGuidance from './footer/guidance'
import FooterConnect from './footer/connect'
import FooterChicagoBanner from './footer/chicago-banner'

const Footer = () => (
  <footer className="bg-light">
    <div className="container">
      <div className="row py-5 text-center">
        {/* footer-btn */}
          <div className="col">
            <div className="float-md-left">
              <button type="button" className="btn btn-outline-dark">
                Submit a Sign
              </button>
              {/* footer-login */}
              <FooterLogin/>
              
            </div>
          </div>
          {/* footer-guidance */}
          <FooterGuidance/>

          {/* footer-connect */}
          <div className="col-md-2 tracked">
            <div className="float-md-right text-md-left">
              <h6 className="footer-type text-uppercase text-secondary">Connect</h6>
              <ul className="footer-type list-unstyled">
                <li className="py-1">
                  <a href="#" className="text-dark">
                    About us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-dark">
                    Email
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-dark">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer-banner */}
      <div className=" container">
        <div className="bg-dark">
          <div className="row text-center py-4">
            {/* footer-chicago */}
            <FooterChicagoBanner/>
            
            {/* footer-banner-social */}
            <FooterConnect/>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
