import { Accessor, createSignal, onCleanup } from 'solid-js';
import { IAtomReturnValue } from '..';

export const createBlitzState = <T = any>(
  store: IAtomReturnValue,
): [Accessor<T>, (newVal: any) => void, () => void] => {
  const [state, setState] = createSignal<T>(store.getValue());

  const unsubscribe = store.subscribe(setState);

  onCleanup(() => unsubscribe());

  return [state, store.setValue, unsubscribe];
};
