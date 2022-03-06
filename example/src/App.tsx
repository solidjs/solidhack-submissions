import { Component, For } from 'solid-js';
import { selector, createBlitzState } from '@dimensionhq/blitz';
import { todoListState } from './store';

const App: Component = () => {
  let [hello, setHello] = createBlitzState<string>(todoListState);
  const [state, setState, unsubscribe] = selector({
    atom: todoListState,
    get: (value) => {
      return value + 'lets gooo';
    },
  });

  return (
    <div>
      <input value={hello()} onInput={(e) => setHello(e.currentTarget.value)} />
      <br />
      value: {hello()}
      <br />
      length: {state()}
    </div>
  );
};

export default App;
