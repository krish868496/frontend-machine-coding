import  { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const UseLocalStorage = (key: string, value: string) => {
  if (!isBrowser) {
    return [value, () => {}, () => {}];
  }
  if (!key) {
    throw new Error("Key is required");
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const storedValue = localStorage.getItem(key)
    ? JSON.parse(JSON.stringify(localStorage.getItem(key)))
    : value;

  const [initValue, setInitValue] = useState(storedValue);

  const set = (newValue: string) => {
    setInitValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const remove = () => {
    setInitValue(null);
    localStorage.removeItem(key);
  };

  return [initValue, set, remove];
};

export default UseLocalStorage;
