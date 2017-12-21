import React from 'react';
// import { Link } from 'react-router-dom';

import FooterGuidance from './footer/guidance';
import FooterAboutUs from './footer/about-us';
import FooterChicagoBanner from './footer/chicago-banner';
import FooterSocial from './footer/social';

const Footer = () => (
  <footer className="bg-light">
    <div className="container">
      <div className="row py-5 text-center">
        <div className="col">
          <div className="float-md-left">
            <button type="button" className="btn btn-outline-dark">
              Submit a Sign
            </button>
          </div>
        </div>
        <FooterGuidance />
        <FooterAboutUs />
      </div>
    </div>
    {/* footer-banner */}
    <div className=" container">
      <div className="bg-dark">
        <div className="row text-center py-4">
          <FooterChicagoBanner />
          <FooterSocial />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
