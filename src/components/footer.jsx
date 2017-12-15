import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogin from './footer/login';
import FooterGuidance from './footer/guidance'
import FooterConnect from './footer/connect'
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
              {/* footer-login */}
              <FooterLogin/>
              
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
            <FooterConnect/>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
