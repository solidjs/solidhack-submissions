import { createBlitzValue, createSetBlitzState } from "@dimensionhq/blitz";
import { textStore } from "../store";

// createSetBlitzValue allows you to set the value of a blitz atom
export const CreateSetBlitzStateExample = () => {
  const set = createSetBlitzState(textStore);

  const get = createBlitzValue(textStore);
  return (
    <div class="flex flex-col gap-2">
      <input
        class="bg-light-600 border border-2"
        placeholder="Type Something"
        type="text"
        onInput={(e) => set(e.currentTarget.value)}
      />
      <h1>Value: {get()}</h1>
    </div>
  );
};
