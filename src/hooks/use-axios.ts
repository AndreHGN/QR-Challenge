/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://qr-challenge.herokuapp.com';

interface useAxiosOutput<R> {
  response: R | undefined;
  error: Error | undefined;
  loading: boolean;
}

export const useAxios = <D = any, R = any>(
  params: AxiosRequestConfig<D>,
  onComplete?: () => void,
): useAxiosOutput<R> => {
  const [response, setResponse] = useState<R>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .request(params)
      .then((response: AxiosResponse<R>) => {
        setResponse(response.data);
        onComplete && onComplete();
      })
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { response, error, loading };
};
