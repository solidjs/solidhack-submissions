import { createBlitzValue, createResetBlitzState } from "@dimensionhq/blitz";
import { textStore } from "../store";

// createResetBlitzState is a helper function that
// resets the value of a Blitz state to its default value
export const CreateBlitzReset = () => {
  const reset = createResetBlitzState(textStore);
  const value = createBlitzValue(textStore);
  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
