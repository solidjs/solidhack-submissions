import { IAtomReturnValue } from '..';

export const createResetBlitzState = <T = any>(store: IAtomReturnValue): (() => void) => {
  const reset = () => {
    store.reset();
    console.log(store.get());
  };

  return reset;
};
