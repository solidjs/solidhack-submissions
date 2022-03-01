import { createMemo, createSignal, onCleanup } from 'solid-js';
import { atom } from '..';

export function useRecoilState(atom: atom): [() => any, (value: any) => void] {
  const [value, setValue] = createSignal(atom.props.default);
  let body = document.getElementsByTagName('body')[0];

  body.addEventListener(`recoil_changeState_${atom.props.key}`, (ev) => {
    setValue(atom.value);
  });

  const setter = (newValue: any) => {
    atom.set(newValue);
  };

  onCleanup(() => {
    document.removeEventListener(`recoil_changeState_${atom.props.key}`, (_) => {});
  });

  return [value, setter];
}
