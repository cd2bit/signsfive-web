import * as types from './types';
/**
 * Returns object of type.SET_A11Y_NAVIGATED_MESSAGE and message string
 * @function
 * @param {object} state={}
 * @param {object} action
 * @returns {object}
 */
export default function (state = {}, action) {
  switch (action.type) {
    case types.SET_A11Y_NAVIGATED_MESSAGE:
      return {
        ...state,
        message: `Navigated to ${action.message} page.`,
      };
    default:
      return state;
  }
}
