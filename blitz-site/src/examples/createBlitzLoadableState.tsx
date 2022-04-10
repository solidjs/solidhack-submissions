import {
  atom,
  createBlitzLoadableState,
  createBlitzState,
} from "@dimensionhq/blitz";
import { Match, Switch } from "solid-js";
import { textStore } from "../store";

const req = async () => {
  // wait for 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch("https://api.github.com/users/dimensionhq");
  const data = await res.json();
  return data.login;
};

// createBlitzLoadableState accepts two arguments namely the atom and the async function
// if the async function returns a promise, the state will be set to loading
// if the promise resolves, the state will be set to loaded and
// the value will be set to the resolved value
// if the promise rejects, the state will be set to error
export const CreateBlitzLoadableExample = () => {
  const [text, setText] = createBlitzLoadableState(textStore, req);

  return (
    <Switch>
      <Match when={text().state == "Loading"}>
        <div>Loading...</div>
      </Match>
      <Match when={text().state == "Loaded"}>
        <div>Value: {text().value}</div>
      </Match>
      <Match when={text().state == "Error"}>
        <div>Error</div>
      </Match>
    </Switch>
  );
};
