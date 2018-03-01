import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import A11yNavigatedMessageContainer, { A11yNavigatedMessage } from '../../src/containers/a11y-navigated-message';

describe('<A11yMessage />', () => {
  let wrapper;

  describe('Component', () => {
    let messageStr;

    beforeEach(() => {
      messageStr = 'Cats';

      wrapper = shallow(<A11yNavigatedMessage
        message={messageStr}
      />);
    });

    describe('when message has string', () => {
      it('renders element with screen-read', () => {
        expect(wrapper.find('.sr-only')).to.have.lengthOf(1);
      });
    });

    describe('.componentWillReceiveProps', () => {
      describe('when props.message are changed', () => {
        beforeEach(() => {
          wrapper.setProps({ message: 'foo bar' });
        });

        it('set initial state.message with empty string', () => {
          expect(wrapper.state().message).to.have.string('');
        });

        it('still set state message with emtpy string before 50ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 45);
        });

        it('set state message with string after 50ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('foo bar');
            done();
          }, 55);
        });

        it('set state message with string before 500ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('foo bar');
            done();
          }, 495);
        });

        it('set state message with empty string after 500ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 510);
        });
      });

      describe('when props.message are null', () => {
        beforeEach(() => {
          wrapper.setProps({ message: null });
        });

        it('set initial state.message with empty string', () => {
          expect(wrapper.state().message).to.have.string('');
        });

        it('still set state message with emtpy string before 50ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 45);
        });

        it('still set state message with emtpy string after 50ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 55);
        });

        it('still set state message with emtpy string before 500ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 495);
        });

        it('still set state message with emtpy string after 500ms', (done) => {
          setTimeout(() => {
            expect(wrapper.state().message).to.have.string('');
            done();
          }, 510);
        });
      });
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
    });

    describe('.mapStateToProps', () => {
      describe('when a11yReducer.message has string', () => {
        beforeEach(() => {
          store = mockStore({ a11yReducer: { message: 'has_string' } });
          wrapper = shallow(<A11yNavigatedMessageContainer store={store} />);
        });

        it('set props.message to have string', () => {
          const { message } = wrapper.props();
          expect(message).to.have.string('has_string');
        });
      });

      describe('when a11yReducer.message is null', () => {
        beforeEach(() => {
          store = mockStore({ a11yReducer: { message: null } });
          wrapper = shallow(<A11yNavigatedMessageContainer store={store} />);
        });

        it('set props.message to be null', () => {
          const { message } = wrapper.props();
          expect(message).to.be.null;
        });
      });
    });
  });
});
