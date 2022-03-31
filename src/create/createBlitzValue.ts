import { Accessor, createSignal } from 'solid-js';
import { IAtomReturnValue } from '..';

export const createBlitzValue = <T = any>(store: IAtomReturnValue): Accessor<T> => {
  const [state, setState] = createSignal<T>(store.get());

  store.subscribe(setState);

  return state;
};
