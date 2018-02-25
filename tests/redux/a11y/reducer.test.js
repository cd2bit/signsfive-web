import a11yReducer, { a11yTypes } from '../../../src/redux/modules/a11y';

describe('(Reducer) a11y', () => {
  it('should return the initial state', () => {
    expect(a11yReducer(undefined, {})).to.deep.equal({});
  });

  it('should handle SET_A11Y_NAVIGATED_MESSAGE', () => {
    expect(a11yReducer(undefined, {
      type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
      message: 'passed',
    })).to.deep.equal({
      message: 'Navigated to passed page.',
    });
  });
});
