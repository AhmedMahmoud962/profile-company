import axiosInstance from './axiosInstance'

export const sendContact = async (data) => {
      const response = await axiosInstance.post('/messages', data)
    return response.data
}
