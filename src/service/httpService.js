import axios from "axios";
import { toast } from "react-toastify";

// axios.interceptors.request.use(function (config) {
//   const managerToken = localStorage.getItem("manager_token");
//   const customerToken = localStorage.getItem("token");
//   const executiveToken = localStorage.getItem("eToken");
//   if (managerToken) {
//     config.headers["x-manager-token"] = managerToken;
//   }
//   if (customerToken) {
//     config.headers["x-customer-token"] = customerToken;
//   }
//   if (executiveToken) {
//     config.headers["x-executive-token"] = executiveToken;
//   }
//   return config;
// });

// axios.interceptors.response.use(null, (error) => {
//   toast.error(error.response.data);
//   return Promise.reject(error);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};