import a11yReducer, { a11yTypes } from '../../../src/redux/modules/a11y';

describe('(Reducer) a11y', () => {
  let reducer;

  it('returns the initial state', () => {
    reducer = a11yReducer(undefined, {});
    expect(reducer).to.deep.equal({});
  });

  it('handles SET_A11Y_NAVIGATED_MESSAGE', () => {
    reducer = a11yReducer(undefined, {
      type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
      message: 'passed',
    });
    expect(reducer).to.deep.equal({
      message: 'Navigated to passed page.',
    });
  });
});
