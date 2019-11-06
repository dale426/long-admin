import HttpRequest from '@/libs/axios'

const domain = process.env.VUE_APP_COMMON_URL
const axios = new HttpRequest(domain)

// post
export const user_page = (opts) => {
  return axios.request({
    url: '/user/page',
    data: opts,
    method: 'post'
  })
}

// get
export const user_post = (opts) => {
  return axios.request({
    url: '/user/post',
    params: opts,
    method: 'get'
  })
}