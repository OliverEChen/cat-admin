import axios from 'axios'
const catAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: 5000
  // 跨域时候允许携带凭证
  // withCredentials: true
})

export default catAxios
