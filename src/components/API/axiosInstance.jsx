import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.myaios.ai/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
