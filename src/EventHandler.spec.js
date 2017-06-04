import { EventHandler, SingleEventHandler } from './EventHandler';

describe("Event Handler", () => {
  const eh = new EventHandler();

  it('sends message to one listener', () => {
    const fakeListener = jest.fn(() => { 1 });
    const data = 1;

    eh.addListener('fake', fakeListener);
    eh.publish('fake', data);

    expect(fakeListener).toBeCalledWith(data);
  });

  it('sends message to more than one listener', () => {
    const fakeListener = jest.fn((foo) => { foo * 2 });
    const fakeListener2 = jest.fn((bar) => { bar - 1 });
    const data = 1;

    eh.addListener('fake', fakeListener);
    eh.addListener('fake', fakeListener2);
    eh.publish('fake', data);

    expect(fakeListener).toBeCalledWith(data);
    expect(fakeListener2).toBeCalledWith(data);
  });

  it('respects the event called', () => {
    const fakeListener = jest.fn((foo) => { foo * 2 });
    const data = 1;

    eh.addListener('fake', fakeListener);
    eh.publish('other', data);

    expect(fakeListener).not.toBeCalledWith(data);
  });
});

describe("Single Event Handler", () => {
  const eh = new SingleEventHandler();

  it('sends message to one listener', () => {
    const fakeListener = jest.fn(() => { 1 });
    const data = 1;

    eh.addListener(fakeListener);
    eh.publish(data);

    expect(fakeListener).toBeCalledWith(data);
  });

  it('sends message to more than one listener', () => {
    const fakeListener = jest.fn((foo) => { foo * 2 });
    const fakeListener2 = jest.fn((bar) => { bar - 1 });
    const data = 1;

    eh.addListener(fakeListener);
    eh.addListener(fakeListener2);
    eh.publish(data);

    expect(fakeListener).toBeCalledWith(data);
    expect(fakeListener2).toBeCalledWith(data);
  });
});
