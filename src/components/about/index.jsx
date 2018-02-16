import React from 'react';
import OurStory from './our-story';
import OurName from './our-name';
import Team from './team';

const About = () => (
  <div className="about">
    <div className="group-photo-container text-center">
      <img className="img-responsive group-photo" src="/images/about-cover.png" alt="A group discussion about Signsfive" />
    </div>
    <div className="container">
      <section className="container py-5 px-5">
        <h3 className="tracked pb-2">
          About SignsFive
        </h3>
        <p>
          <strong>
            Make the search and share for STE(A)M (Science, Technology,
             Engineering, <em>Art</em>, Math) signs easier.
          </strong>
        </p>
        <p>
          In fields where new technologies and technical terms are always
           emerging, SignsFive will be a place where d/Deaf/HoH, interpreters
           and ASL students (and hearing users of ASL) can find signs for
           STE(A)M terms and contribute to the growing collection.
        </p>
      </section>
      <div className="row py-5">
        <OurStory />
        <OurName />
      </div>
      <header className="container">
        <div className="py-5 px-5">
          <h3 className="tracked text-center pb-2">
            Meet the Team
          </h3>
        </div>
      </header>
      <div className="container">
        <Team />
      </div>
    </div>
  </div>
);

export default About;
