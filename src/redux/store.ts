// store.ts
import { createStore } from "redux";
import { reducer } from "../redux-manual/reducer";

export const store = createStore(reducer);
