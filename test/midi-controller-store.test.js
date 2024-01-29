import { expect } from 'chai';
import { describe, it } from 'mocha';
import { MidiControllerStore } from '#src/index';

describe('midi controller store', () => {
  it('should return the same instance when calling getInstance multiple times', () => {
    const instance1 = MidiControllerStore.getInstance();
    const instance2 = MidiControllerStore.getInstance();
    expect(instance1).to.equal(instance2);
  });

  it('should set and get the correct value for a given controller and channel', () => {
    const state = MidiControllerStore.getInstance();
    const controller = 1;
    const channel = 2;
    const value = 3;
    state.set(controller, channel, value);
    expect(state.getValue(controller, channel)).to.equal(3);
  });

  it('should return 0 for default values', () => {
    const state = MidiControllerStore.getInstance();
    state.clear();
    expect(state.getValue(1, 1)).to.equal(0);
    expect(state.getValue(2, 1)).to.equal(0);
    expect(state.getValue(1, 2)).to.equal(0);
    expect(state.getValue(2, 2)).to.equal(0);
  });

  it('should receive an event when a value is set', () => {
    const state = MidiControllerStore.getInstance();
    state.clear();
    state.on('data', (message) => {
      expect(message).to.deep.equal({ controller: 1, channel: 10, value: 60 });
    });
    state.set(1, 10, 60);
  });
});
