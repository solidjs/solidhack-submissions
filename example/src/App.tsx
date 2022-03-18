import { Component, For } from 'solid-js';
import { selector, createBlitzState } from '@dimensionhq/blitz';
import { todoListState } from './store';
const I: Component = () => {
  let [hello, setHello] = createBlitzState<string>(todoListState);

  return <div>value: {hello()}</div>;
};
const App: Component = () => {
  let [hello, setHello] = createBlitzState<string>(todoListState);
  let index = [];
  for (let i = 0; i < 5000; i++) {
    index.push(i);
  }

  return (
    <div>
      <input value={hello()} onInput={(e) => setHello(e.currentTarget.value)} />
      <br />
      value: {hello()}
      <br />
      <For each={index}>{(i) => <I />}</For>
    </div>
  );
};

export default App;
