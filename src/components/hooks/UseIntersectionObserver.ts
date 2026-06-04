import { useEffect, useState } from "react";

const UseIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

export default UseIntersectionObserver;
