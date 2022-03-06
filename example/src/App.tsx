import { atom } from '@dimensionhq/blitz';
import { createSignal, For } from 'solid-js';
import Nice from './Nice';
import { userAtomState } from './store';

function App() {
  const [v, setV] = createSignal('');
  userAtomState.subscribe((val: any) => {
    setV(val);
  });

  let i = [];
  for (let index = 0; index < 3000; index++) {
    i.push(index);
  }
  return (
    <div class="App">
      <input
        type="text"
        value={v()}
        onInput={(e) => userAtomState.setValue(e.currentTarget.value)}
      />
      <br />
      {v()}
      <For each={i}>{(i) => <Nice />}</For>
    </div>
  );
}

export default App;
