import { api } from "./api";

export const login = (payload: { username: string; password: string }) =>
  api.post("/login", payload).then((res) => res.data);

export const register = (payload: {
  username: string;
  email: string;
  password: string;
}) => api.post("/register", payload).then((res) => res.data);
