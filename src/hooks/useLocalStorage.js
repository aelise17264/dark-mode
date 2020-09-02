import { useState } from "react";

export const useLocalStorage = (key, initialValue = '') => {
  
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // console.log(key)
    // console.log(initialValue)
    return item ? JSON.parse(item) : initialValue;
  });
console.log(key)
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};