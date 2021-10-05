/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unresolved */
import type {
  IPromiseAxiosConfig, IPromiseAxiosErrorValue, AllowedRequestMethod,
  IPromiseAxiosThenValue,
} from '@dc/common-tool/dist/@types/ajax/abstract'
import { Message } from 'element-ui'
import { baseURL } from '@/config/api'
import { Ajax, PENDING } from '@dc/common-tool'

const defaultOptions = {
  baseURL,
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  timeout: 20000, // 默认20s请求超时
  //   validateStatus: function (status) {
  //     return status >= 200 && status < 300; // default
  //   },
}

// 当token过期时,当前是否已发送login请求
let reLogin = false

const instance = new Ajax(defaultOptions)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line import/prefer-default-export
export function createAjax<T>(url:string, method?:AllowedRequestMethod) {
  // eslint-disable-next-line arrow-body-style
  return (data:any, extraConfig?:IPromiseAxiosConfig) => {
    return instance.createAjax<T>(url, method)(data, extraConfig).catch((e:IPromiseAxiosErrorValue|IPromiseAxiosThenValue<string>) => {
      if ('error' in e) {
        if (e.error.response) {
          const { status } = e.error.response
          if (status === 401) {
            if (reLogin) return PENDING
            reLogin = true
            Message.error('token过期')
            instance.pendingSourceMap.forEach((sources) => { sources.forEach((sourceItem) => sourceItem.source.cancel()) })
            setTimeout(() => { reLogin = false }, 0)
            return PENDING
          }

          if (status < 200 || status >= 300) {
            if (!e.config.customErrorHandler) {
              Message.error(`${e.config.baseURL}${e.config.url}:${e.error.response.data.errmsg || e.error.response.data.message}`)
            }
            return Promise.reject(e)
          }
        }
        if (!e.config.customErrorHandler) {
          Message.error(e.error.message)
        }
        return Promise.reject(e)
      }
      if (!e.config.customErrorHandler) {
        Message.error(`${e.config.baseURL}${e.config.url}:${e.data.errmsg || e.data.message}`)
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ config: e.config, error: { response: { data: e.data } } })
    })
  }
}
