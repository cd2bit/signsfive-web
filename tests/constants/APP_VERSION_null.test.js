describe('APP_VERSION', () => {
  delete process.env.npm_package_version;

  describe('when process.env.npm_package_version is null', () => {
    let appVersion;

    beforeEach(() => {
      appVersion = require('../../src/constant').APP_VERSION; // eslint-disable-line global-require
    });

    it('has package version', () => {
      expect(appVersion).to.have.string('x.x.x');
    });
  });
});
