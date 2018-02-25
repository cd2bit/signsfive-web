import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { a11yActions } from '../redux/modules/a11y';
/**
 * FAQs page.
 * @reactProps {function} setA11yNavigatedMessage - A function that will trigger display
 *  the message on navigated page.
 * @see {@link react}
 * @see {@link react-redux}
 */
export class Faqs extends Component {
  /**
   * @type {string} displayName
   */
  static displayName = 'FAQs'
  /**
   * componentDidMount lifecycle method.
   * @access private
   */
  componentDidMount() {
    this.props.setA11yNavigatedMessage(Faqs.displayName);
  }
  /**
   * render lifecycle method.
   * @access private
   * @return {ReactElement} HTML
  */
  render() {
    return (
      <div className="faq">
        <h2>FAQs</h2>
        <ul>
          <li>list goes here</li>
        </ul>
      </div>
    );
  }
}

Faqs.propTypes = {
  setA11yNavigatedMessage: PropTypes.func.isRequired,
};
/**
 * Mapping dispatch to props
 * @function mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = dispatch => ({
  setA11yNavigatedMessage: displayName =>
    dispatch(a11yActions.setA11yNavigatedMessage(displayName)),
});

export default connect(null, mapDispatchToProps)(Faqs);
