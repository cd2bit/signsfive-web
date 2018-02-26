import React from 'react';

import AccessibleHOC from '../components/EnhanceAccessibility';

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

export default AccessibleHOC(Faqs);
