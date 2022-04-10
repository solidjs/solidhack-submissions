import { Accessor, createSignal } from 'solid-js';
import { IAtomReturnValue } from '..';

type FnType<T = any> = (...args: any) => Promise<T>;

type State = 'Loading' | 'Loaded' | 'Error';
export interface ICreateBlitzLoadableSate<T = null> {
  state: State;
  error: any;
  value: T;
}

export const createBlitzLoadableState = <T = any>(
  store: IAtomReturnValue,
  f: FnType<T>,
): [Accessor<ICreateBlitzLoadableSate<T>>, (newVal: any) => void, () => void] => {
  let data: ICreateBlitzLoadableSate<T> = {
    error: null,
    state: 'Loading',
    value: store.get(),
  };

  const [state, setState] = createSignal(data);

  f()
    .then((res) => {
      data = {
        error: null,
        state: 'Loaded',
        value: res,
      };
      setState(data);
      store.set(res);
    })
    .catch((reason) => {
      data = {
        error: reason,
        state: 'Error',
        value: null as any,
      };
      setState(data);
    });

  const set = (value: T) => {
    store.set(value);
  };

  const unsubscribe = store.subscribe((v: any) => {
    data = {
      error: data.error,
      state: data.state,
      value: v,
    };
    setState(data);
  });

  return [state, set, unsubscribe];
};
