# Blitz
Fast, simple and efficient state management for Solid.

## Getting started is easy!
```bash
# npm
npm i @dimensionhq/solid-recoil

# yarn
yarn add @dimensionhq/solid-recoil

# pnpm
pnpm i @dimensionhq/solid-recoil
```

## Atoms
Think of atoms as storage containers each container has its own definite set of properties (key, default etc).

```js
import {atom, useRecoilState, useRecoilValue, useRecoilLoadingValue} from "@dimensionhq/solid-recoil"

const todoState = atom({
    default: [], 
    key: 'todoList';
})

// for setting todos you can use useRecoilState
const [todo, setTodo] = useRecoilState(todoState)

// for getting / subscribing for a value you can use
const todo = useRecoilValue(todoState)


const f = async () => {
    await sleep(2000);
    return 'text here';
};

// for updating state after an async function has completed
const todo = useRecoilLoadingValue(todoState, f);
```
