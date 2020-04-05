/* eslint-disable react-hooks/exhaustive-deps */
/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------------- THIRD PARTY ------------------------------ */
import { useState, useEffect } from 'react';
import { deserialize } from 'class-transformer';

/* -------------------------------------------------------------------------- */
/*                               HOOK DEFINITION                              */
/* -------------------------------------------------------------------------- */
export function usePromise<T = any>(initialPromise?: Promise<any> | null, objectConstructor?: any) {
  let
    [result, setResult] = useState<T>(),
    [loading, setLoading] = useState(false),
    [error, setError] = useState<Error | undefined>(undefined),
    [promise, resolve] = useState(initialPromise);

  const fetchData = async () => {
    setError(undefined);
    setLoading(true);

    try {
      // Execute Promise
      let _result = await promise

      // No type de-serialization, just return promise result
      if (!objectConstructor) {
        setResult(_result)
      } else {
        // Deserialize class instance
        let instance = deserialize<T>(objectConstructor, JSON.stringify(_result))
        setResult(instance)
      }
    }
    catch (err) {
      setError(err)
    }
    setLoading(false)
  }


  const reset = () => {
    setResult(undefined)
    setLoading(false)
    setError(undefined)
  }

  useEffect(() => {
    if (promise) fetchData();
  }, [promise]);

  return { result, loading, error, resolve, reset };
}