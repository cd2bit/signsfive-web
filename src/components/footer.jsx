import React from 'react';
import { Link } from 'react-router-dom';
import FooterGuidance from './footer/guidance'
import FooterSocial from './footer/social'
import FooterChicagoBanner from './footer/chicago-banner'
import FooterAboutus from './footer/about-us'

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
                         
            </div>
          </div>
          {/* footer-guidance */}
          <FooterGuidance/>

          {/* footer-about us */}
          <FooterAboutus/>
         
        </div>
      </div>
      {/* footer-banner */}
      <div className=" container">
        <div className="bg-dark">
          <div className="row text-center py-4">
            {/* footer-chicago */}
            <FooterChicagoBanner/>  
            
            {/* footer-banner-social */}
            <FooterSocial/>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
