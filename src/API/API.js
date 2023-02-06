import { api } from "src/boot/axios";

export async function RegisterApi(payload) {
  const data = await api.post("/register", payload);
  return data;
}
export async function LoginApi(payload) {
  const data = await api.post("/login", payload);
  return data;
}


export async function AddProductApi(payload) {
  const data = await api.post("/product", payload);
  return data;
}

export async function GetProductApi() {
  const data = await api.get("/product");
  return data;
}
export async function GetProductApiId(id) {
  const data = await api.get("/product?product_type.id=" + id);
  return data;
}
export async function GetProductId(id) {
  const data = await api.get("/product?id=" + id);
  return data;
}
export async function EditProductApi(payload, id) {
  const data = await api.put("/product/" + id, payload);
  return data;
}
export async function DelProductApi(id) {
  const data = await api.delete("/product/" + id);
  return data;
}


export async function AddCategoreApi(payload) {
  const data = await api.post("/category", payload);
  return data;
}
export async function EditCategoreApi(payload, id) {
  const data = await api.put("/category/" + id, payload);
  return data;
}
export async function DelCategoreApi(id) {
  const data = await api.delete("/category/" + id);
  return data;
}
export async function GetCategoreApi(id) {
  const data = await api.get("/category?userId=" + id);
  return data;
}
// export const api = {

//   LoginApi: (data) =>
//     api.post(BASE_URL + "/login", data),

//   RegisterApi: (data) =>
//     axios.post(BASE_URL + "/register", data),

//   // AddBookApi: (data, token) =>
//   //   axios.post(BASE_URL + "/book", data, {
//   //     headers: {
//   //       'Authorization': token
//   //     }
//   //   }),
// }

