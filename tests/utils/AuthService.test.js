import AuthService from '../../src/utils/AuthService';
import AUTH0 from '../../src/utils/auth-web';

import {
  ID_TOKEN,
  ACCESS_TOKEN,
  PROFILE,
} from '../../src/utils//auth-constant';

describe('AuthService', () => {
  let response;
  let getIdTokenStub;

  describe('.login', () => {
    const { login } = AuthService;
    let authorizeSpy;

    beforeEach(() => {
      authorizeSpy = stub(AUTH0, 'authorize');
    });

    afterEach(() => {
      AUTH0.authorize.restore();
    });

    it('calls AUTH0.authorize', () => {
      login();
      expect(authorizeSpy.called).to.be.true;
    });
  });

  describe('.isAuthenticated', () => {
    const { isAuthenticated, setIdToken } = AuthService;
    let setIdTokenStub;

    beforeEach(() => {
      setIdTokenStub = stub(AuthService, 'setIdToken');
    });

    afterEach(() => {
      AuthService.setIdToken.restore();
    });

    describe('when Id Token is null', () => {
      beforeEach(() => {
        setIdTokenStub.returns(null);
      });

      it('returns not authenticated', () => {
        response = isAuthenticated();
        expect(response).to.be.false;
      });
    });

    describe('when Id Token is valid', () => {
      beforeEach(() => {
        setIdToken(1123444);
        stub(AuthService, 'isTokenExpired').returns(false);
      });

      it('returns authenticated', () => {
        response = isAuthenticated();
        expect(response).to.be.true;
      });
    });
  });

  describe('.handleAuthentication', () => {
    const { handleAuthentication } = AuthService;
    let parseHashStub;
    let userInfoStub;

    beforeEach(() => {
      parseHashStub = stub(AUTH0, 'parseHash');
      userInfoStub = stub(AUTH0.client, 'userInfo');
    });

    afterEach(() => {
      AUTH0.parseHash.restore();
      AUTH0.client.userInfo.restore();
    });

    describe('valid hash', () => {
      beforeEach(() => {
        parseHashStub.yields(null, { accessToken: 'cat', idToken: 'dog' });
      });

      describe('with profile', () => {
        beforeEach(() => {
          userInfoStub.yields(null, { mouse: true });
        });

        it('resolves with valid object', () => { // eslint-disable-line arrow-body-style
          return handleAuthentication().then((result) => {
            expect(parseHashStub.called).to.be.true;
            expect(userInfoStub.called).to.be.true;
            expect(result).to.deep.equal({
              idToken: 'dog',
              accessToken: 'cat',
              profile: { mouse: true },
            });
          });
        });
      });

      describe('with error', () => {
        beforeEach(() => {
          userInfoStub.yields('drats', { mouse: true });
        });

        it('resolves with valid object', () => { // eslint-disable-line arrow-body-style
          return handleAuthentication().catch((result) => {
            expect(parseHashStub.called).to.be.true;
            expect(userInfoStub.called).to.be.true;
            expect(result).to.have.string('drats');
          });
        });
      });
    });

    describe('invalid hash', () => {
      describe('accessToken is invalid', () => {
        beforeEach(() => {
          parseHashStub.yields(null, { accessToken: null, idToken: 'foo' });
        });

        it('rejects with error', () => { // eslint-disable-line arrow-body-style
          return handleAuthentication().catch((result) => {
            expect(parseHashStub.called).to.be.true;
            expect(userInfoStub.called).to.be.false;
            expect(result).to.be.an('error');
          });
        });
      });

      describe('idToken is invalid', () => {
        beforeEach(() => {
          parseHashStub.yields(null, { accessToken: 'bar', idToken: null });
        });

        it('rejects with error', () => { // eslint-disable-line arrow-body-style
          return handleAuthentication().catch((result) => {
            expect(parseHashStub.called).to.be.true;
            expect(userInfoStub.called).to.be.false;
            expect(result).to.be.an('error');
          });
        });
      });
    });

    describe('when AUTH0.parseHash has error', () => {
      beforeEach(() => {
        parseHashStub.yields('crikey', false);
      });

      it('rejects with string', () => { // eslint-disable-line arrow-body-style
        return handleAuthentication().catch((result) => {
          expect(parseHashStub.called).to.be.true;
          expect(userInfoStub.called).to.be.false;
          expect(result).to.have.string('crikey');
        });
      });
    });

    describe('when AUTH0.parseHash has no authResult or error', () => {
      beforeEach(() => {
        parseHashStub.yields(null, null);
      });

      it('resolves as null', () => { // eslint-disable-line arrow-body-style
        return handleAuthentication().then((result) => {
          expect(parseHashStub.called).to.be.true;
          expect(userInfoStub.called).to.be.false;
          expect(result).to.be.null;
        });
      });
    });
  });

  describe('localStorage', () => {
    const { setProfile } = AuthService;
    let localStorageStore;

    beforeEach(() => {
      localStorage.clear();
      localStorageStore = localStorage.__STORE__; // eslint-disable-line no-underscore-dangle
    });

    afterEach(() => {
      localStorage.clear();
    });

    describe('.getProfile', () => {
      const { getProfile } = AuthService;

      describe('localStorage.PROFILE is empty', () => {
        it('saves to localStorage for PROFILE', () => {
          response = getProfile();
          expect(response).to.deep.equal({});
        });
      });

      describe('localStorage.PROFILE is not empty', () => {
        it('saves to localStorage for PROFILE', () => {
          setProfile({ check: { one: 1 } });
          response = getProfile();
          expect(response).to.deep.equal({ check: { one: 1 } });
        });
      });
    });

    describe('.setProfile', () => {
      it('saves to localStorage for PROFILE', () => {
        setProfile({ a: true, b: 'z', c: 123 });
        expect(localStorageStore[PROFILE]).to.equal('{"a":true,"b":"z","c":123}');
      });
    });

    describe('.setIdToken', () => {
      const { setIdToken } = AuthService;

      it('saves to localStorage for ID_TOKEN', () => {
        setIdToken('id token random');
        expect(localStorageStore[ID_TOKEN]).to.equal('id token random');
      });
    });

    describe('.setAccessToken', () => {
      const { setAccessToken } = AuthService;

      it('saves to localStorage for ACCESS_TOKEN', () => {
        setAccessToken('access random');
        expect(localStorageStore[ACCESS_TOKEN]).to.equal('access random');
      });
    });
  });

  describe('.getTokenExpirationDate', () => {
    const { getTokenExpirationDate } = AuthService;

    beforeEach(() => {
      getIdTokenStub = stub(AuthService, 'getIdToken');
      getIdTokenStub.returns(new Date());
    });

    afterEach(() => {
      AuthService.getIdToken.restore();
    });

    describe('with valid id token', () => {
      beforeEach(() => {
        getIdTokenStub.returns(new Date());
      });

      it('returns a expiration date', () => {
        response = getTokenExpirationDate();
        expect(response).to.be.gt(new Date());
      });
    });

    describe('with invalid id token', () => {
      beforeEach(() => {
        getIdTokenStub.returns(null);
      });

      it('returns a expiration date', () => {
        response = getTokenExpirationDate();
        expect(response).to.be.null;
      });
    });
  });

  describe('.isTokenExpired', () => {
    const { isTokenExpired } = AuthService;
    let getTokenExpirationDateStub;

    beforeEach(() => {
      getIdTokenStub = stub(AuthService, 'getIdToken');
      getTokenExpirationDateStub = stub(AuthService, 'getTokenExpirationDate');
    });

    afterEach(() => {
      AuthService.getIdToken.restore();
      AuthService.getTokenExpirationDate.restore();
    });

    describe('.getIdToken', () => {
      describe('when is null', () => {
        beforeEach(() => {
          getIdTokenStub.returns(null);
        });

        it('returns as expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.false;
          expect(response).to.be.true;
        });
      });

      describe('when is false', () => {
        beforeEach(() => {
          getIdTokenStub.returns(false);
        });

        it('returns as expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.false;
          expect(response).to.be.true;
        });
      });
    });

    describe('.getTokenExpirationDate', () => {
      let date;
      let clock;

      beforeEach(() => {
        getIdTokenStub.returns(true);
        date = new Date();
      });

      describe('when is null', () => {
        beforeEach(() => {
          getTokenExpirationDateStub.returns(null);
        });

        it('returns as expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.true;
          expect(response).to.be.true;
        });
      });

      describe('when is false', () => {
        beforeEach(() => {
          getTokenExpirationDateStub.returns(false);
        });

        it('returns as expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.true;
          expect(response).to.be.true;
        });
      });

      describe('when after expiration date', () => {
        beforeEach(() => {
          clock = useFakeTimers(date.setDate(date.getDate() + 1));
          getTokenExpirationDateStub.returns(date.setDate(date.getDate() - 1));
        });

        afterEach(() => {
          clock.restore();
        });

        it('returns as expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.true;
          expect(response).to.be.true;
        });
      });

      describe('when before expiration date', () => {
        beforeEach(() => {
          clock = useFakeTimers(date.setDate(date.getDate() - 1));
          getTokenExpirationDateStub.returns(date.setDate(date.getDate() + 1));
        });

        afterEach(() => {
          clock.restore();
        });

        it('returns as not expired', () => {
          response = isTokenExpired();
          expect(getIdTokenStub.called).to.be.true;
          expect(getTokenExpirationDateStub.called).to.be.true;
          expect(response).to.be.false;
        });
      });
    });
  });
});
