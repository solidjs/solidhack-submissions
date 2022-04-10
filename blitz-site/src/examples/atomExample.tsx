import { createSignal } from "solid-js";
import { textStore } from "../store";

export const AtomExample = () => {
  // NOTE: .get() does not subscribe to events so you will only get the initialValue
  let defaultValue = textStore.get();

  const [value, setValue] = createSignal(defaultValue);

  // .subscribe() subscribes to event changes in that atom
  textStore.subscribe((value) => {
    setValue(value);
  });
  // .reset() resets the atom to the initial value
  const reset = () => textStore.reset();

  return (
    <div class="flex flex-col gap-3">
      <h1>initialValue: {defaultValue}</h1>
      <input
        class="bg-light-600 border border-2"
        placeholder="Type Something"
        type="text"
        onInput={(e) => textStore.set(e.currentTarget.value)}
        value={value()}
      />
      <h1>{value()}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
