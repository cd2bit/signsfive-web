describe('APP_VERSION', () => {
  describe('when process.env.npm_package_version is not null', () => {
    let appVersionArray;

    beforeEach(() => {
      const { APP_VERSION } = require('../../src/constant'); // eslint-disable-line global-require
      appVersionArray = APP_VERSION.split('.');
    });

    it('has package version', () => {
      expect(appVersionArray).to.have.lengthOf(3);
      expect(isNaN(appVersionArray[0])).to.be.false; // eslint-disable-line no-restricted-globals
      expect(isNaN(appVersionArray[1])).to.be.false; // eslint-disable-line no-restricted-globals
      expect(isNaN(appVersionArray[2])).to.be.false; // eslint-disable-line no-restricted-globals
    });
  });
});
