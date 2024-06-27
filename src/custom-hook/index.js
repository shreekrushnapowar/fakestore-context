import { useState, useEffect } from "react";
export const useLocalState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  return { data, error, loading };
};
