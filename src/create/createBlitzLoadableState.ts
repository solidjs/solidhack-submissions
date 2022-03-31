import { Accessor, createSignal } from 'solid-js';
import { IAtomReturnValue } from '..';

type FnType<T = any> = (id: string) => Promise<T>;

export const createBlitzLoadableState = <T = any>(
  store: IAtomReturnValue,
  f: FnType<T>,
): [Accessor<T>, (newVal: any) => void, () => void] => {
  const [state, setState] = createSignal(store.get());

  const set = async (newVal: any) => {
    const result = await f(newVal);
    store.set(result);
  };

  const unsubscribe = store.subscribe(setState);

  return [state, set, unsubscribe];
};
