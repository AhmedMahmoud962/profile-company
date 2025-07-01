import axiosInstance from "./axiosInstance";

export const getSlider = async () => {
    const response = await axiosInstance.get("/sliders");
    return response.data;
};

// export const getSliderById = async (id) => {
//     const response = await axiosInstance.get(`/slider/${id}`);
//     return response.data;
// };