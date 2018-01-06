import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authActions } from '../redux/modules/auth';

const SignIn = props => (
  <button type="button" className="btn btn-outline-light mr-2" onClick={props.signIn}>
    <i className="fa fa-user-circle-o hidden-md-down" aria-hidden="true" />
    <span className="d-none d-sm-inline-block">
      Log In
    </span>
  </button>
);


SignIn.propTypes = {
  // count: PropTypes.number.isRequired,
  signIn: PropTypes.func.isRequired,
  // increment: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({ count: state.counterReducer.count });

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(authActions.loginRequest()),
});

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(SignIn);
