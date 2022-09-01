import http from "./httpService";
import jwt_decode from "jwt-decode";
const accessTokenKey = "token";

const apiUrl = process.env.REACT_APP_URL_BASE;
const userApiEndpoint = apiUrl + "/user";

export async function getUserInfo() {
  const res = await http.get(`${userApiEndpoint}/me`);
  return res.data;
}

export async function updateUserInfo(user) {
  try {
    await http.put(`${userApiEndpoint}/`, user);
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function resetPassword(data) {
  try {
    await http.patch(`${userApiEndpoint}/password`, data);
  } catch (e) {
    throw new Error(e.response.data);
  }
}

export async function updateAddress(address) {
  try {
    await http.patch(`${userApiEndpoint}/address`, address);
  } catch (e) {
    throw new Error(e.response.data);
  }
}
