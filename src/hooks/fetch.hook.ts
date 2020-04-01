/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';


/* -------------------------------------------------------------------------- */
/*                               HOOK DEFINITION                              */
/* -------------------------------------------------------------------------- */
export const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, url]);
  return { response, error, isLoading };
};