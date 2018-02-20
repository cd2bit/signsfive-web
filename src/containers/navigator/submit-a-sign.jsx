import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
/**
 * This is SubmitASign
 * @param {object} props
 * @param {boolean} props.isAuthenticated {@link AuthService.isAuthenticated}
 * @returns {react}
 */
export const SubmitASign = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <span />;
  }
  return (
    <Button color="primary">
      <i className="fa fa-upload" aria-hidden="true" />
      <span className="d-none d-sm-inline-block">
        Submit a Sign
      </span>
    </Button>
  );
};

SubmitASign.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(SubmitASign);
