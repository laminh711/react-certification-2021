import { useState } from 'react';

function parseJSON(response) {
  return new Promise((resolve) =>
    response.json().then((json) =>
      resolve({
        status: response.status,
        ok: response.ok,
        json,
      })
    )
  );
}

function useRequest() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFetchPromise = (fetchPromise) => {
    setLoading(true);

    const handledPromise = new Promise((resolve, reject) => {
      fetchPromise.then(parseJSON).then((res) => {
        setLoading(false);
        if (res.ok) {
          return resolve(res.json);
        }
        return reject(res.json);
      });
    });

    handledPromise
      .then((res) => {
        setResponse(res);
      })
      .catch((errorResponse) => {
        setError(errorResponse);
      });
  };

  return { requestState: { response, loading, error }, handleFetchPromise };
}

export default useRequest;
