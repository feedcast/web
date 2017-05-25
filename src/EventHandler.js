import _ from 'lodash';

class EventHandler {
  constructor() {
    this.listeners = { 'alert': [alert] }; // eventName => one or more listeners
  }

  addListener(eventName, listener) {
    if (!this.listeners[eventName]) {
      return this.listeners[eventName] = [ listener ]
    }

    this.listeners[eventName].push(listener);
  }

  publish(eventName, data){
    _.map(this.listeners[eventName], (listener) => listener(data));
  }
}

class SingleEventHandler {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    console.log("add listener " + this.id);
    console.log(listener);
    this.listeners.push(listener);
  }

  publish(data){
    console.log("publish " + this.id);
    _.map(this.listeners, (listener) => listener(data));
  }
}

export {EventHandler, SingleEventHandler};
