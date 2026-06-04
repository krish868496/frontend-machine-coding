import { useEffect, useRef, useState } from "react";
import Usedbounce from "./Usedebounce";
import UseLocalStorage from "./hooks/UseLocalStorage";

export default function Timer() {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  // useEffect(() => {
  //   ref.current = count;
  // }, [count]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(ref.current);
  //   }, 1000);
  //   console.log(interval, "interval");
  //   return () => clearInterval(interval);
  // }, []);


  const [input, setInput] = useState("");
  const debounce = Usedbounce(input, 500);



  const [value, set, remove] = UseLocalStorage("username", "John Doe");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={remove}>remove</button>
      <p>Debounced: {debounce}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div className="mt-500 w-[800px] h-600 bg-red-700 "></div>
    </>
  );
}
