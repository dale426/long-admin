import HttpRequest from '@/libs/axios'

const domain = process.env.VUE_APP_COMMON_URL || '/'
const axios = new HttpRequest(domain)

// post
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

// get
export const get_info = (token) => {
  return axios.request({
    url: 'get_info',
    params: { token },
    method: 'get'
  })
}