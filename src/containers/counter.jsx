import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
} from '../actions/counter-action';

const Counter = props => (
  <div>
    <h2>Counter</h2>
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.count}</span>
      <button onClick={props.increment}>+</button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ count: state.counter.count });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
