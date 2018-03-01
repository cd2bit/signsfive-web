describe('ENVIRONMENT', () => {
  delete process.env.NODE_ENV;

  describe('when process.env.NODE_ENV is null', () => {
    let environment;

    beforeEach(() => {
      environment = require('../../src/constant').ENVIRONMENT; // eslint-disable-line global-require
    });

    it('defaults to "development"', () => {
      expect(environment).to.have.string('development');
    });
  });
});
