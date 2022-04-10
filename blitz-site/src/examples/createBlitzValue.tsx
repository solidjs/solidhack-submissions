import { createBlitzValue } from "@dimensionhq/blitz";
import { textStore } from "../store";

// createBlitzValue allows you to get the
// current value of the atom
export const CreateBlitzValue = () => {
  const text = createBlitzValue(textStore);

  return (
    <div class="flex flex-col gap-2">
      <h1 class="overflow-hidden">Value: {text()}</h1>
    </div>
  );
};
