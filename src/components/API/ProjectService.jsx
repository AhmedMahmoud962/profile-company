import axiosInstance from "./axiosInstance";

export const getProjects = async () => {
    const response = await axiosInstance.get("/projects");
    return response.data;
};

export const getProjectDetailsById = async (id) => {
    const response = await axiosInstance.get(`/projects/${id}`);
    return response.data;
};