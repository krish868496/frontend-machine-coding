// types.ts
export type State = {
  counter: {
    count: number;
  };
};

export type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET"; payload: number }
  | { type: "RESET"; payload: number }
  | { type: "MULTIPLY"; payload: number };
