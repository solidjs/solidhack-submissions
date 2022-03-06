export interface IAtomReturnValue<T = any> {
  notify(changedVal: any): void;
  subscribe(listener: any): () => void;
  getValue(): T;
  setValue(newVal: any): void;
}

export function atom<T = any>(initialValue: T): IAtomReturnValue<T> {
  let currentListeners: string | any[];
  let nextListeners: any[] = [];

  let store = {
    notify(changedVal: any) {
      currentListeners = nextListeners;
      currentListeners.forEach((fn) => {
        fn(changedVal);
      });
    },

    subscribe(listener: any) {
      if (typeof listener !== 'function') {
        throw new Error('Expected listener to be a function.');
      }
      let isSubscribed = true;
      nextListeners.push(listener);

      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        nextListeners = nextListeners.filter((item) => item !== listener);
      };
    },

    getValue() {
      return initialValue;
    },
    setValue(newVal: any) {
      initialValue = newVal;
      store.notify(newVal);
    },
  };
  return store;
}
