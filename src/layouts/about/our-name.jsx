import React from 'react';

const OurName = () => (
  <div className="col-md-6">
    <h3 className="tracked pb-2">Our Name</h3>
    <p>
      <strong>
                You might be wondering, {'"'}What’s the story behind the name?{'"'}
      </strong>
    </p>

    {/* <!-- TODO: Make icons accessible to screenreaders --> */}
    <p>Short answer: <em>OpenSigns</em> has been taken by a sign shop. 👎</p>

    <p>
      But after weeks of exploring and bantering, we realized that the number <em>five</em>
      had been a repetitive theme, referring both to
      <a href="{http://www.lifeprint.com/asl101/pages-layout/parameters.htm}">{'"'}Five Parameters of ASL{'"'}</a>
      and the five letters in STE(A)M. Most importantly, the sign for
      SignsFive was too cool
      to pass. For the win!
    </p>

    <div className="pt-1">
      <section className="bg-dark text-white text-center align-middle py-5">GIF of SignsFive sign</section>
    </div>
  </div>
);

export default OurName;
