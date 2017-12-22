export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + 1
      };
    case COUNTER_DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};
