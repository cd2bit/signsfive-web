describe('DEBUG', () => {
  process.env.NODE_ENV = 'FooBar';

  describe('when ENVIRONMENT is not "development"', () => {
    let debug;

    beforeEach(() => {
      debug = require('../../src/constant').DEBUG; // eslint-disable-line global-require
    });

    it('returns true', () => {
      expect(debug).to.be.false;
    });
  });
});
