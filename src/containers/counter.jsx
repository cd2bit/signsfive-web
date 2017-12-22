import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increment,
  decrement
} from '../actions/counter-action';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
