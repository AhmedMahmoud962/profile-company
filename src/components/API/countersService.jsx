import axiosInstance from "./axiosInstance";

export const getCounters = async () => {
    const response = await axiosInstance.get("/counters");
    return response.data;
};