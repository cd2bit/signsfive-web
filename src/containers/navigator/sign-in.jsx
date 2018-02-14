import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authActions } from '../../redux/modules/auth';
/**
 * This is SignIn
 * @reactProps {boolean} isAuthenticated {@link AuthService.isAuthenticated}
 * @reactProps {function} loginStatus - this is prop2
 * @reactProps {function} loginUser - this is prop2
 * @reactProps {function} logoutUser - this is prop2
 */
export class SignIn extends Component {
  componentWillMount() {
    this.props.loginStatus();
  }

  signInOrOut = () => {
    const { loginUser, logoutUser, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      loginUser();
    } else {
      logoutUser();
    }
  }

  render() {
    const { isAuthenticated } = this.props;

    let buttonLabel = 'Log In';
    if (isAuthenticated) {
      buttonLabel = 'Log Out';
    }

    return (
      <button type="button" className="btn btn-outline-light mr-2" onClick={this.signInOrOut}>
        <i className="fa fa-user-circle-o hidden-md-down" aria-hidden="true" />
        <span className="d-none d-sm-inline-block">
          {buttonLabel}
        </span>
      </button>
    );
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loginStatus: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  loginStatus: () => dispatch(authActions.loginStatus()),
  loginUser: () => dispatch(authActions.loginUser()),
  logoutUser: () => dispatch(authActions.logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
