import React, { Component } from 'react';
import Member from './member';
import teamData from '../../data/team.json';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: teamData,
    };
  }

  createMembers() {
    // eslint-disable-next-line react/no-array-index-key
    return this.state.team.map((member, i) => <Member key={i} data={member} />);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.createMembers()}
        </div>
      </div>
    );
  }
}

export default Team;
