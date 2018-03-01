describe('ENVIRONMENT', () => {
  process.env.NODE_ENV = 'FooBar';

  describe('when process.env.NODE_ENV is not null', () => {
    let environment;

    beforeEach(() => {
      environment = require('../../src/constant').ENVIRONMENT; // eslint-disable-line global-require
    });

    it('has node environment', () => {
      expect(environment).to.have.string('FooBar');
    });
  });
});
