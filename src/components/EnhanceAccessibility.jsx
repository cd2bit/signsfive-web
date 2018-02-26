import React from 'react';
import { connect } from 'react-redux';

import { getDisplayName } from '../utils/getDisplayName';
import { a11yActions } from '../redux/modules/a11y';

const AccessibleHOC = (WrappedComponent) => {
  class ScreenReaderAccessibleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = getDisplayName(WrappedComponent).replace( /([A-Z])/g, " $1" );
    }

    /**
     * componentDidMount lifecycle method.
     * @access private
     */
    componentDidMount() {
      this.props.setA11yNavigatedMessage(this.displayName);
    }

  }

  ScreenReaderAccessibleComponent.propTypes = {
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

  return connect(null, mapDispatchToProps)(ScreenReaderAccessibleComponent);
}

export default AccessibleHOC;
