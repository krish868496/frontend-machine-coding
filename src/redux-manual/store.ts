// store.ts
import { reducer } from "./reducer";
import type { Action, State } from "./type";

type Listener = () => void;

export function createStore(
  reducerFn: (state: State, action: Action) => State,
) {
  let state: State;
  let listeners: Listener[] = [];

  function getState(): State {
    return state;
  }

  function dispatch(action: Action) {
    state = reducerFn(state, action);
    listeners.forEach((l) => l());
  }
  console.log(listeners);

  function subscribe(listener: Listener) {
        console.log(listener);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  dispatch({ type: "@@INIT" } as Action);

  return { getState, dispatch, subscribe };
}

export const store = createStore(reducer);
