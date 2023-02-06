import axios from "axios";
// import { errorHandler } from "@/middleware/error-handler";

export const defaultClient = axios.create({
  baseURL: import.meta.VITE_BASE_URL,
});

defaultClient.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// DefaultClient.interceptors.response.use(
//   (response) => response,
//   (error) => errorHandler(error)
// );
