import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/**
 * This solves the problem with Single Page Applications (SPA) and screen reader where
 *  a silent page transition leading to a very confusing experience for these users
 *  who use screen reader. Imagine trying to navigate a web application if you could
 *  not even see that the navigation was successful.
 * @reactProps {string} message - A message that are passed to state.message
 * @see {@link react}
 * @see {@link react-redux}
 */
export class A11yNavigatedMessage extends Component {
  /**
   * constructor
   * @reactProps {object} props
   */
  constructor(props) {
    super(props);
    /**
     * @type {{message: string}} state
     */
    this.state = { message: '' };
  }
  /**
   * componentWillReceiveProps lifecycle method. We delay the setting and
   *  clearing of the accessible route transition text to ensure that the
   *  screen readers don't miss it.
   * @access private
   * @reactProps {object} nextProps
   * @reactProps {object} nextProps.message
   */
  componentWillReceiveProps({ message }) {
    if (message) {
      setTimeout(() => this.setState({ message }), 50);
      setTimeout(() => this.setState({ message: '' }), 500);
    }
  }
  /**
   * render lifecycle method.
   * @access private
   * @return {ReactElement} HTML
  */
  render() {
    const { message } = this.state;

    return (
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message ? <span>{message}</span> : ''}
      </div>
    );
  }
}

A11yNavigatedMessage.propTypes = {
  message: PropTypes.string, // eslint-disable-line react/require-default-props
};
/**
 * Mapping state to props
 * @function mapStateToProps
 * @param {object} state
 */
const mapStateToProps = state => ({
  message: state.a11yReducer.message,
});

export default connect(mapStateToProps)(A11yNavigatedMessage);
