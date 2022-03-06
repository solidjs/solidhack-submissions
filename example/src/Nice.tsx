import { createMemo, createSignal } from 'solid-js';
import { userAtomState } from './store';

const Nice = () => {
  const [v, setV] = createSignal('');

  userAtomState.subscribe((val: any) => {
    setV(val);
  });
  return <div>{v()}</div>;
};

export default Nice;
