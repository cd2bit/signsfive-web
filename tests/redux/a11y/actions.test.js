import { a11yTypes, a11yActions } from '../../../src/redux/modules/a11y';

describe('(Actions) a11y ', () => {
  it('creates an action for SET_A11Y_NAVIGATED_MESSAGE', () => {
    const action = a11yActions.setA11yNavigatedMessage('FooBar Actions');
    expect(action).deep.equal({
      type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
      message: 'FooBar Actions',
    });
  });
});
