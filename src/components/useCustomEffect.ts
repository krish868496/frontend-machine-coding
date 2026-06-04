import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  const firstRender = useRef(true);
  const prevDeps = useRef([]);
  const cleanupRef = useRef(null);

  // ✅ First render
  if (firstRender.current) {
    firstRender.current = false;

    const cleanup = effect();

    if (typeof cleanup === "function") {
      cleanupRef.current = cleanup;
    }

    prevDeps.current = deps || [];

    return;
  }

  // ✅ Dependency comparison (shallow like React)
  const depsChanged = deps
    ? deps.some((dep, i) => !Object.is(dep, prevDeps.current[i]))
    : true;

  if (depsChanged) {
    // ✅ Run previous cleanup before new effect
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current;
    }

    const cleanup = effect();

    if (typeof cleanup === "function") {
      cleanupRef.current = cleanup;
    } else {
      cleanupRef.current = null;
    }
  }

  // ✅ Store latest deps
  prevDeps.current = deps || [];
};

export default useCustomEffect;
