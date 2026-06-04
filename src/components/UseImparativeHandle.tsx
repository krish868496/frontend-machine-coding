import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Parent() {
  const childRef = useRef();

  return (
    <>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>Focus Input</button>
    </>
  );
}

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} />;
});

export default Parent;
