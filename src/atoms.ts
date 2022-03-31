import PubSub from './utils/pubsub';

export interface IAtomReturnValue<T = any> {
  notify(changedVal: any): void;
  subscribe(listener: any): () => void;
  get(): T;
  set(newVal: any): void;
  reset(): void;
}

export function atom<T = any>(initialValue: T): IAtomReturnValue<T> {
  let currentListeners: string | any[];
  let nextListeners: any[] = [];
  let currentValue: T = initialValue;
  let pubsub = new PubSub();
  let store = {
    reset() {
      currentValue = initialValue;

      store.notify(currentValue);
      pubsub.publish('atom', currentValue as any);
    },
    notify(changedVal: any) {
      currentListeners = nextListeners;

      currentListeners.forEach((val) => {
        val(changedVal);
      });
    },

    subscribe(listener: any) {
      let isSubscribed = true;
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
      return currentValue;
    },

    set(newVal: any) {
      currentValue = newVal;
      pubsub.publish('atom', newVal);
      store.notify(newVal);
    },
  };
  return store;
}
