import * as types from './types';
/**
 * Returns object of type.SET_A11Y_NAVIGATED_MESSAGE and message string
 * @function setA11yNavigatedMessage
 * @param {string} message
 * @returns {object}
 */
// eslint-disable-next-line import/prefer-default-export
export const setA11yNavigatedMessage = message => ({
  type: types.SET_A11Y_NAVIGATED_MESSAGE,
  message,
});
