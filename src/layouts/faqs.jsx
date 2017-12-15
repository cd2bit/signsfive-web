import React from 'react';

const Faqs = () => (
  <div className="faq">
    <h2>FAQs</h2>
    <ul>
      {this.state.question.map((q, i) =>
        <li key={i}>{q}</li>
      )}
    </ul>
  </div>
)

export default Faqs;
