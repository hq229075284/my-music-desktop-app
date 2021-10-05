// 接口前缀
/* eslint-disable-next-line import/no-mutable-exports */
let baseURL = '[需修改]'
if (process.env.NODE_ENV === 'development') {
  baseURL = '[需修改]'
}

/* eslint-disable-next-line import/no-mutable-exports */
export const loginApiUrl = '/api/login/sso'

export { baseURL }
