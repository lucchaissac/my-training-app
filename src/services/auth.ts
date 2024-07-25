import { api } from "./api";
import { User } from "../types";

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await api.post("/auth/login", { email, password });
  return response.data.token;
};

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<User> => {
  const response = await api.post("/auth/register", {
    username,
    email,
    password,
  });
  return response.data;
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get("/auth/me");
  return response.data;
};
