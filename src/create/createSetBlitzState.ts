import { IAtomReturnValue } from '..';

export const createSetBlitzState = <T = any>(store: IAtomReturnValue): ((newVal: any) => void) => {
  return store.set;
};
