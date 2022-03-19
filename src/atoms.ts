import PubSub from './utils/pubsub';

export interface IAtomReturnValue<T = any> {
  notify(changedVal: any): void;
  subscribe(listener: any): () => void;
  get(): T;
  set(newVal: any): void;
}

export function atom<T = any>(initialValue: T): IAtomReturnValue<T> {
  let currentListeners: string | any[];
  let nextListeners: any[] = [];

  let pubsub = new PubSub();
  let store = {
    notify(changedVal: any) {
      currentListeners = nextListeners;

      currentListeners.forEach((val) => {
        val(changedVal);
      });
      // currentListeners.forEach((fn) => {
      //   fn(changedVal);
      // });
    },

    subscribe(listener: any) {
      // if (typeof listener !== 'function') {
      //   throw new Error('Expected listener to be a function.');
      // }
      let isSubscribed = true;
      // nextListeners.push(listener);
      pubsub.subscribe('atom', listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        nextListeners = nextListeners.filter((item) => item !== listener);
      };
    },

    get() {
      return initialValue;
    },
    set(newVal: any) {
      initialValue = newVal;
      pubsub.publish('atom', newVal);
      store.notify(newVal);
    },
  };
  return store;
}
