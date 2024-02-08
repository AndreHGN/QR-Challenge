/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://qr-challenge.herokuapp.com';

export interface useAxiosOutput<D, R> {
  response: R | undefined;
  error?: Error | undefined;
  loading: boolean;
  refetch: () => void;
  makeRequest: (
    axiosParams: AxiosRequestConfig<D>,
    onAxiosComplete?: () => void,
  ) => void;
}

export const useAxios = <D = any, R = any>(
  params?: AxiosRequestConfig<D>,
  onComplete?: () => void,
): useAxiosOutput<D, R> => {
  const [response, setResponse] = useState<R>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const makeRequest = (
    axiosParams: AxiosRequestConfig<D>,
    onAxiosComplete?: () => void,
  ) => {
    setLoading(true);
    axios
      .request(axiosParams)
      .then((response: AxiosResponse<R>) => {
        setResponse(response.data);
        onAxiosComplete && onAxiosComplete();
      })
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  };

  const refetch = () => {
    if (params) {
      makeRequest(params, onComplete);
    }
  };

  useEffect(() => {
    if (params) {
      makeRequest(params, onComplete);
    }
  }, []);

  return { response, error, loading, refetch, makeRequest };
};
