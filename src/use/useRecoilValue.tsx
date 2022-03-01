import { createSignal } from 'solid-js';
import { atom } from '..';

export function useRecoilValue(atom: atom): () => any {
  const [value, setValue] = createSignal(atom.props.default);
  let body = document.getElementsByTagName('body')[0];

  body.addEventListener(`recoil_changeState_${atom.props.key}`, (ev) => {
    setValue(atom.value);
  });

  return value;
}
