import axiosInstance from "./axiosInstance";

export const getAboutServices = async () => {
    const response = await axiosInstance.get("/about-us");
    return response.data;
};

