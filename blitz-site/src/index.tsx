import "windi.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import Site from "./site";

render(
  () => (
    <Router>
      <Site />
    </Router>
  ),
  document.getElementById("root")
);
