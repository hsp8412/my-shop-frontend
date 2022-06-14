import http from "./httpService";
import jwt_decode from "jwt-decode";
const accessTokenKey = "token";

const apiUrl = process.env.REACT_APP_URL_BASE;
const userApiEndpoint = apiUrl + "/user";

export function getUserInfo() {
  return http.get(`${userApiEndpoint}/me`);
}
