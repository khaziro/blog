import {useEffect, useState} from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, {signal: abortCont.signal})
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        return response.json()
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null)
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(error.message);
        }
      })

    return () => abortCont.abort();

  }, [])

  return {data, isPending, error}
}

export default useFetch;