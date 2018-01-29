import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SubmitASign = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <span />;
  }
  return (
    <button type="button" className="btn btn-primary">
      <i className="fa fa-upload" aria-hidden="true" />
      <span className="d-none d-sm-inline-block">
        Submit a Sign
      </span>
    </button>
  );
};

SubmitASign.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(SubmitASign);
