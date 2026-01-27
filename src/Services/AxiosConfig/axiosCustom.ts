/***
 * *axios request configs
 */

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = "";

  if (token) {
    config.headers.Authorization = `${token}`;
  } else {
    if (axios.defaults.headers.common.Authorization) {
      config.headers.common.Authorization = axios.defaults.headers.common;
    }
  }
  return config;
});

/***
 * *axios response configs
 */
axiosInstance.interceptors.response.use(
  async (result) => {
    if (result) {
      return result.data;
    }
  },
  async (error) => {
    const expectedErrorRefreshToken =
      error.response && error.response.status === 401;

    if (expectedErrorRefreshToken) {
      // Handle refresh token
    }

    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;
    if (!expectedError) {
    } else {
      console.log(error.response, "error.response");
    }
    return Promise.reject(error);
  },
);

const axiosCustom = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
  interceptors: axiosInstance.interceptors,
};

export default axiosCustom;
