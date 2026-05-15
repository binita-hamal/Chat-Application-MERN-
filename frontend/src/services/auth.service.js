import api from "./axiosInstance";

export const postRegister = async (data) => {
  try {
    const response = await api.post(`/register`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const postLogin = async (data) => {
  try {
    const response = await api.post(`/login`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
