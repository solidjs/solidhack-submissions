import { createSignal } from 'solid-js';
import { atom } from '..';

type function_promise_type = () => Promise<any>;

export function useRecoilLoadingValue(atom: atom, f: function_promise_type): () => any {
  let state = {
    loading: 'loading',
    value: atom.value,
  };
  const [value, setValue] = createSignal(state);

  f()
    .then((res) => {
      atom.set(res);

      setValue({
        loading: 'hasValue',
        value: atom.value,
      });
    })
    .catch(() => {
      setValue({
        loading: 'error',
        value: atom.value,
      });
    });

  let body = document.getElementsByTagName('body')[0];
  body.addEventListener(`recoil_changeState_${atom.props.key}`, (ev) => {
    setValue({
      loading: 'hasValue',
      value: atom.value,
    });
  });

  return value;
}
