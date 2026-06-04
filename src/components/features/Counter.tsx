// Counter.tsx
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../../redux-manual/type";
import { decrement, increment, reset } from "../../redux-toolkit/counterSlice";
import { useState } from "react";

export default function Counter() {
  // redux manual setup code
  // const [state, setState] = useState(store.getState());

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setState(store.getState());
  //   });
  //   console.log(unsubscribe);

  //   return unsubscribe;
  // }, []);

  // using redux only setup code

  // const count = useSelector((state: State) => state.count);
  // console.log(count);
  // const dispatch = useDispatch();

  // using redux toolkit setup code
  const count = useSelector((state: State) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1>{count}</h1>
      <div className="flex flex-col gap-3">
        <button
          className="py-2 px-4 rounded-sm cursor-pointer border border-border text-base font-medium leading-7"
          onClick={() => {
            console.log("increment clicked");
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          className="py-2 px-4 rounded-sm cursor-pointer border border-border text-base font-medium leading-7"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className="py-2 px-4 rounded-sm cursor-pointer border border-border text-base font-medium leading-7"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
