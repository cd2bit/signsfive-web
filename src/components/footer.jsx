import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogin from './footer/login';
import FooterGuidance from './footer/guidance'

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
            <div className="col-md-6">
              <div className="text-white footer-type tracked text-uppercase float-md-left">
                <p>
                  Built with <i className="fa fa-heart" aria-hidden="true" aira-label="heart"></i> in Chicago
                </p>
              </div>
            </div>
            {/* footer-banner-social */}
            <div className="col-md-6">
              <div className="float-md-right">
              <a href="https://www.facebook.com/signsfive/" aria-label="Facebook">
                <i className="fa fa-facebook fa-lg fa-inverse px-3"></i>
              </a>
              <a href="https://twitter.com/signsfive" aria-label="Twitter">
                <i className="fa fa-twitter fa-lg fa-inverse px-3"></i>
              </a>
              <a href="https://www.instagram.com/signsfive" aria-label="Instagram">
                <i className="fa fa-instagram fa-lg fa-inverse px-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
