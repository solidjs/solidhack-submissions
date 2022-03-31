import { Accessor, createSignal, onCleanup } from 'solid-js';
import { IAtomReturnValue } from '..';

export const createBlitzState = <T = any>(
  store: IAtomReturnValue,
): [Accessor<T>, (newVal: any) => void, () => void] => {
  const [state, setState] = createSignal<T>(store.get());

  const unsubscribe = store.subscribe(setState);

  return [state, store.set, unsubscribe];
};
