// reducer.ts

import type { Action, State } from "./type";

export const initialState: State = {
  count: 0,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      // return count only when greater than or equal to 0, otherwise return 0
      return { count: state.count >= 0 ? state.count + 1 : 0 };

    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };

    case "SET":
      return { count: action.payload };
    case "RESET":
      return { count: 0 };
      case "MULTIPLY":
        return {count : state.count * action.payload}

    default:
      return state;
  }
}
