import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getDisplayName from '../../utils/getDisplayName';
import { a11yActions } from '../../redux/modules/a11y';

const makeAccessibleRouteComponent = (WrappedComponent) => {
  class ScreenReaderAccessibleComponent extends React.Component {
    static WrappedComponent = WrappedComponent;

    constructor(props) {
      super(props);

      this.displayName = getDisplayName(WrappedComponent)
        // insert a space between lower & upper
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // space before last upper in a sequence followed by lower
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        // uppercase the first character
        .replace(/^./, str => str.toUpperCase());
    }

    /**
     * componentDidMount lifecycle method.
     * @access private
     */
    componentDidMount() {
      this.props.setA11yNavigatedMessage(this.displayName);
    }

    /**
     * render lifecycle method.
     * @access private
     * @return {ReactElement} HTML
    */
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  ScreenReaderAccessibleComponent.propTypes = {
    setA11yNavigatedMessage: PropTypes.func.isRequired,
  };

  return ScreenReaderAccessibleComponent;
};

const makeAccessibleRoute = (WrappedComponent) => {
  const ScreenReaderAccessibleComponent = makeAccessibleRouteComponent(WrappedComponent);
  /**
   * Mapping dispatch to props
   * @function mapDispatchToProps
   * @param {function} dispatch
   */
  const mapDispatchToProps = dispatch => ({
    setA11yNavigatedMessage: displayName =>
      dispatch(a11yActions.setA11yNavigatedMessage(displayName)),
  });

  return connect(null, mapDispatchToProps)(ScreenReaderAccessibleComponent);
};

export const ScreenReaderAccessibleComponent = makeAccessibleRouteComponent;
export default makeAccessibleRoute;
