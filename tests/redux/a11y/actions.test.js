import { a11yTypes, a11yActions } from '../../../src/redux/modules/a11y';

describe('(Actions) a11y ', () => {
  it('should create an action for SET_A11Y_NAVIGATED_MESSAGE', () => {
    expect(a11yActions.setA11yNavigatedMessage('FooBar Actions')).deep.equal({
      type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
      message: 'FooBar Actions',
    });
  });
});
