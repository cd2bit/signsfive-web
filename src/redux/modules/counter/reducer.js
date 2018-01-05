import * as types from './types';

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return {
        count: state.count + 1,
      };
    case types.COUNTER_DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
