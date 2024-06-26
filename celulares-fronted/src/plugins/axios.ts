import { useAuthStore } from '@/stores'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT
})
axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (config.headers) {
    //en cada peticion al servidor del nest le ponermos conent type a json y el token que nos ha dado previamente al loger el usuario para que asi el jwt del nes t sepa que usuario esta logeado
    config.headers['Content-type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + authStore.token
  }
  return config
})
export default axios
