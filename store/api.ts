import axios, { AxiosPromise, AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  method: "get",
  baseURL: process.env.API_URI,
  headers: {
    // Accept: undefined,
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(request => {
  console.log("Starting Request", request.url);
  return request;
});

axiosInstance.interceptors.response.use(response => {
  console.log("Response:", response.data);
  return response;
});

const Api = axiosInstance;

interface DoRequestParams<T> {
  apiMethod: () => AxiosPromise<T>;
  onStart?: () => void;
  onError?: (e: AxiosError) => void;
  onSuccess?: (data: T) => void;
  onEnd?: () => void;
}
async function DoRequest<T>({
  apiMethod,
  onStart,
  onError,
  onSuccess,
  onEnd
}: DoRequestParams<T>) {
  if (onStart) {
    onStart();
  }
  try {
    const response = await apiMethod();
    if (onSuccess && response) {
      onSuccess(response.data);
    }
  } catch (e) {
    if (onError) {
      onError(e);
    }
  } finally {
    if (onEnd) {
      onEnd();
    }
  }
}

export { Api, DoRequest };
