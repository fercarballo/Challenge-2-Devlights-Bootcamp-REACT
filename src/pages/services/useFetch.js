import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [results, setResults] = useState({ loading: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  async function getDatos(url) {
    try {
      setResults({ loading: true, date: null });
      const resp = await fetch(url);
      const data = await resp.json();
      setResults({ loading: false, data });
    } catch (err) {
      console.log(err);
    }
  }

  return results;
};
