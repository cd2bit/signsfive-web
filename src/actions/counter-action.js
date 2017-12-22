import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../reducers/counter-reducer';

export function increment() {
  return {
    type: COUNTER_INCREMENT
  }
};

export function decrement() {
  return {
    type: COUNTER_DECREMENT
  }
};
