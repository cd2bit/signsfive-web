import getDisplayName from '../../src/utils/get-display-name';

describe('getDisplayName', () => {
  let mockComponent;
  let displayName;

  beforeEach(() => {
    mockComponent = {};
  });

  describe('Component name as "UnknownComponent"', () => {
    it('has displayName and name both as null', () => {
      mockComponent = { displayName: null, name: null };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('UnknownComponent');
    });

    it('has displayName as null and name as false', () => {
      mockComponent = { displayName: null, name: false };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('UnknownComponent');
    });

    it('has displayName and name both as false', () => {
      mockComponent = { displayName: false, name: false };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('UnknownComponent');
    });

    it('has displayName as null and no name', () => {
      mockComponent = { displayName: null };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('UnknownComponent');
    });

    it('has name as null and no displayName', () => {
      mockComponent = { name: null };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('UnknownComponent');
    });
  });

  describe('Component name as Component.displayName', () => {
    it('has displayName as string and name as null', () => {
      mockComponent = { displayName: 'FooBar', name: null };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('FooBar');
    });

    it('has displayName as string and name as false', () => {
      mockComponent = { displayName: 'BarFoo', name: false };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('BarFoo');
    });

    it('has displayName as string and no name', () => {
      mockComponent = { displayName: 'FooFoo' };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('FooFoo');
    });
  });

  describe('Component name as Component.name', () => {
    it('has name as string and displayName as null', () => {
      mockComponent = { displayName: null, name: 'BazFar' };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('BazFar');
    });

    it('has name as string and displayName as false', () => {
      mockComponent = { displayName: false, name: 'BooFoo' };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('BooFoo');
    });

    it('has name as string and no displayName', () => {
      mockComponent = { name: 'BooBoo' };
      displayName = getDisplayName(mockComponent);
      expect(displayName).to.have.string('BooBoo');
    });
  });
});
