import { Accessor, createSignal, onCleanup } from 'solid-js';
import { IAtomReturnValue } from '.';

interface ISelectorData<T = any> {
  atom: IAtomReturnValue;
  get: (value: T) => any;
}

export const selector = <T = any>(
  data: ISelectorData<T>,
): [Accessor<T>, (newVal: T) => void, () => void] => {
  const [state, setState] = createSignal(data.get(data.atom.get()));

  const unsubscribe = data.atom.subscribe((newVal: any) => {
    setState(data.get(newVal));
  });

  onCleanup(() => unsubscribe());

  return [state, data.atom.set, unsubscribe];
};
