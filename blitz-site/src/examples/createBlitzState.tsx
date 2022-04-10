import { createBlitzState } from "@dimensionhq/blitz";
import { textStore } from "../store";

// createBlitzState allows you to get the current
// value of the atom as well as set the value
// of the atom
export const CreateBlitzExample = () => {
  const [text, setText] = createBlitzState(textStore);

  return (
    <div class="flex flex-col gap-2">
      <input
        class="bg-light-600 border border-2"
        placeholder="Type Something"
        type="text"
        onInput={(e) => setText(e.currentTarget.value)}
        value={text()}
      />
      <h1 class="overflow-hidden">Value: {text()}</h1>
    </div>
  );
};
