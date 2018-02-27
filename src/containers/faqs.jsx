import React from 'react';

import withAccessible from './hoc/enhance-accessibility';

/**
 * FAQs page.
 * @see {@link react}
 * @see {@link react-redux}
 */
export const Faqs = () => (
  <div className="faq">
    <h2>FAQs</h2>
    <ul>
      <li>list goes here</li>
    </ul>
  </div>
);

export default withAccessible(Faqs);
