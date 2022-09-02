import http from "./httpService";
const apiUrl = process.env.REACT_APP_URL_BASE;
const categoryApiEndpoint = apiUrl + "/category";

export async function getCategories() {
  const res = await http.get(categoryApiEndpoint);
  const categories = res.data;
  return categories;
}
