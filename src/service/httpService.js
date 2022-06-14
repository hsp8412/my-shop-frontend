import axios from "axios";
import { getAccessJwt } from "./authService";
import { toast } from "react-toastify";

axios.interceptors.request.use(
  function (config) {
    const token = getAccessJwt();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    toast.error(error.response.data);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
