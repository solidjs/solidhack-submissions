import { Component, For } from 'solid-js';
import {
  selector,
  createBlitzValue,
  createBlitzState,
  createSetBlitzState,
  createResetBlitzState,
} from '@dimensionhq/blitz';
import { todoListState } from './store';
const I: Component = () => {
  let hello = createBlitzValue<string>(todoListState);

  return <div>value: {hello()}</div>;
};
const App: Component = () => {
  let setHello = createSetBlitzState<string>(todoListState);
  let resetHello = createResetBlitzState(todoListState);
  let index = [];
  for (let i = 0; i < 100; i++) {
    index.push(i);
  }

  return (
    <div>
      <button onClick={() => resetHello()}>Reset</button>
      <input onInput={(e) => setHello(e.currentTarget.value)} />
      <br />
      <br />
      <For each={index}>{(i) => <I />}</For>
    </div>
  );
};

export default App;
