import http from "./httpService";
import jwt_decode from "jwt-decode";
const accessTokenKey = "token";

const apiUrl = process.env.REACT_APP_URL_BASE;
const authApiEndpoint = apiUrl + "/auth";
const userApiEndpoint = apiUrl + "/user";

export async function login(email, password) {
  const res = await http.post(authApiEndpoint, {
    email,
    password,
  });
  const { accessToken } = res.data;
  localStorage.setItem(accessTokenKey, accessToken);
}

export async function register(user) {
  await http.post(userApiEndpoint, user);
}

export function getAccessJwt() {
  return localStorage.getItem(accessTokenKey);
}

export function logout() {
  localStorage.removeItem(accessTokenKey);
}

export function getCurrentUser() {
  try {
    const token = getAccessJwt();
    return jwt_decode(token);
  } catch (ex) {
    return null;
  }
}
