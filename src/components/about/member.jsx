import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Member extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line global-require
    this.pathToMemberImage = require('../../lib/teamLoader').default;
  }

  render() {
    const {
      firstName,
      lastName,
      identity,
      role,
    } = this.props.data;

    return (
      <div className="col-3">
        <img className="about-image rounded-circle" src={this.pathToMemberImage(`./${firstName}${lastName}.png`)} alt={`Profile Photography of ${firstName} ${lastName}`} />
        <p className="text-center pt-3">
          <strong>
            {firstName} {lastName}
          </strong>
          <br />
          <span className="badge badge-pill badge-secondary about-team--identity">
            {identity}
          </span>
        </p>
        <p className="text-center">
          {role}
        </p>
      </div>
    );
  }
}

Member.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    identity: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};
