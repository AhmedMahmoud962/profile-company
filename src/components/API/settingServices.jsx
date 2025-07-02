import axiosInstance from "./axiosInstance";

export const getSetting = async () => {
  const response = await axiosInstance.get("/settings");
  return response.data;
};
