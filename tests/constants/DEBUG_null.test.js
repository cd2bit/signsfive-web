describe('DEBUG', () => {
  process.env.NODE_ENV = 'development';

  describe('when ENVIRONMENT is "development"', () => {
    let debug;

    beforeEach(() => {
      debug = require('../../src/constant').DEBUG; // eslint-disable-line global-require
    });

    it('returns true', () => {
      expect(debug).to.be.true;
    });
  });
});
