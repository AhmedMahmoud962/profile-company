import axiosInstance from "./axiosInstance";

export const getClients = async () => {
  const response = await axiosInstance.get("/our-clients");
  return response.data;
};