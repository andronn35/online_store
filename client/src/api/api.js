import axios from 'axios'
import jwt_decode from "jwt-decode";

const $authHost = axios.create({
  baseURL: 'http://localhost:5000/'
})

const $host = axios.create({
  baseURL: 'http://localhost:5000/'
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}
$authHost.interceptors.request.use(authInterceptor)

export const login = async (email, password) => {
  const {data} = await $host.post(`api/user/login`, {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const registration = async (email, password) => {
  const {data} = await $host.post(`api/user/registration`, {email, password, role: 'ADMIN'})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get(`api/user/auth`)
  localStorage.setItem('token', data.token)
  console.log(jwt_decode(data.token));
  return jwt_decode(data.token)
}

export const deviceAPI = {
  fetchTypes() {
    return $host.get(`api/type`)
  },
  addNewType(newType) {
    return $authHost.post(`api/type`, newType)
  },
  fetchBrands() {
    return $host.get(`api/brand`)
  },
  addNewBrand(newBrand) {
    return $authHost.post(`api/brand`, newBrand)
  },
  fetchDevices(typeId, brandId, page, limit= 5) {
    return $host.get(`api/device`, {params: {typeId, brandId, page, limit}}) 
  },
  fetchOneDevice(id) {
    return $host.get(`api/device/${id}`)
  },
  addNewDevice(newDevice) {
    return $authHost.post(`api/device`, newDevice)
  },
}

export const basketAPI = {
  addNewDevice(id, deviceId) {
    return $authHost.put(`api/basket/${id}`, {deviceId})
  },
  getBasket(id) {
    return $authHost.get(`api/basket/${id}`)
  }
}




