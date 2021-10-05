import dd from 'dingtalk-jsapi/entry/union'
import { baseURL } from './api'

// 开发环境
export const IS_DEV = process.env.NODE_ENV === 'development'

// 文件资源访问前缀
export const filePrefix = `${baseURL}/api/static/file`

// token存储用的key
export const TOKEN_KEY = '[需修改]'

// 设备类型判断
const ua = window.navigator.userAgent
// 当前设备是否是安卓
export const IS_ANDRIOD = /Android|Adr/i.test(ua)
// 当前设备是否是苹果
export const IS_IOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)
// 当前网页是否嵌在钉钉中
export const IN_DING = dd.env.platform !== 'notInDingTalk'
