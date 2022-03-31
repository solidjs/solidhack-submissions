import { Component, For } from 'solid-js';
import {
  selector,
  createBlitzValue,
  mutateToLoadable,
  createBlitzState,
  createSetBlitzState,
  createResetBlitzState,
  createBlitzLoadableState,
} from '@dimensionhq/blitz';
import { todoListState } from './store';
const I: Component = () => {
  let hello = createBlitzValue<string>(todoListState);

  return <div>value: {hello()}</div>;
};
const App: Component = () => {
  let setHello = createSetBlitzState<string>(todoListState);
  let resetHello = createResetBlitzState(todoListState);

  const wait = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 'world';
  };

  let [val, setVal] = createBlitzLoadableState(todoListState, wait);
  let index = [];
  for (let i = 0; i < 100; i++) {
    index.push(i);
  }

  return (
    <div>
      <button onClick={() => resetHello()}>Reset</button>
      {JSON.stringify(val())}
      <input onInput={(e) => setVal(e.currentTarget.value)} />
      <br />
      <br />
      <For each={index}>{(i) => <I />}</For>
    </div>
  );
};

export default App;
