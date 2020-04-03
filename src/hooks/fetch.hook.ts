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
  const
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
      if (!objectConstructor) return setResult(_result)

      // Deserialize class instance
      let instance = deserialize<T>(objectConstructor, JSON.stringify(_result))
      setResult(instance)
    }
    catch (err) {
      console.log(err)
      console.error(err)
      setError(err)
    }
    setLoading(false)
    // .catch(_err => setError(_err))
    // .finally(() => setLoading(false))
  }



  useEffect(() => {
    if (promise) fetchData();
  }, [promise]);

  return { result, loading, error, resolve };
}