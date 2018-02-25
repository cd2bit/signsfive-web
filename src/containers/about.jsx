import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { a11yActions } from '../redux/modules/a11y';

import OurStory from '../components/about/our-story';
import OurName from '../components/about/our-name';
import Team from '../components/about/team';
/**
 * About page.
 * @reactProps {function} setA11yNavigatedMessage - A function that will trigger display
 *  the message on navigated page.
 * @see {@link react}
 * @see {@link react-redux}
 */
export class About extends Component {
  /**
   * @type {string} displayName
   */
  static displayName = 'About'
  /**
   * componentDidMount lifecycle method.
   * @access private
   */
  componentDidMount() {
    this.props.setA11yNavigatedMessage(About.displayName);
  }
  /**
   * render lifecycle method.
   * @access private
   * @return {ReactElement} HTML
  */
  render() {
    return (
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
  }
}

About.propTypes = {
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

export default connect(null, mapDispatchToProps)(About);
