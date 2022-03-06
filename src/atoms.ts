export function atom<T = any>(initialValue: T) {
  let currentListeners;
  let nextListeners: any[] = [];
  let store = {
    notify(changedVal: any) {
      currentListeners = nextListeners;
      for (let i = 0; i < currentListeners.length; i++) {
        currentListeners[i](changedVal);
      }
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
