import axiosRef from 'axios'
// import { IUserAccessInfo } from './common.interface'

export const baseURL =
    window.location.origin === 'http://localhost:8080' ?
      'http://localhost:9000'
      : window.location.origin


axiosRef.defaults.headers.post['Content-Type'] = 'application/json'
axiosRef.defaults.headers.put['Content-Type'] = 'application/json'
axiosRef.defaults.headers.get['Content-Type'] = 'application/json'
axiosRef.defaults.headers.delete['Content-Type'] = 'application/json'
const axios = axiosRef.create({

  baseURL,
  headers: {},
  responseType: 'json',
})

export default axios
//yet to be completed