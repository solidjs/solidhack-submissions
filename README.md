# Blitz
Fast, simple and efficient state management for Solid.

```bash
## Getting started is easy!
# npm
npm i @dimensionhq/blitz

# yarn
yarn add @dimensionhq/blitz

# pnpm
pnpm i @dimensionhq/blitz
```


## Atoms
Think of atoms as storage containers each container has its own definite set of properties (key, default etc).

```js
import {atom, useBlitzState} from "@dimensionhq/solid-recoil"

const todoState = atom([])

// for setting todos you can use useBlitzState
const [todo, setTodo] = useBlitzState(todoState)
```