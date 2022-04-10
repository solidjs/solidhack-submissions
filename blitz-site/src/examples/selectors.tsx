import { createBlitzValue, selector } from "@dimensionhq/blitz";
import { textStore } from "../store";

// Selectors can be used to read values from the store
// and compute them before getting them into the client app.
export const SelectorExample = () => {
  const get = createBlitzValue(textStore);
  const [val] = selector({
    atom: textStore,
    get: (state) => state.length,
  });

  return (
    <div class="flex flex-col gap-2">
      <h1>Value: {get()}</h1>
      <h1>Length: {val}</h1>
    </div>
  );
};
