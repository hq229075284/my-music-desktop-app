declare module '*.vue' {
  import Vue from 'vue'

  export default Vue
}

declare module 'router/index.js' {
  import { RouteConfig } from 'vue-router'

  export default RouteConfig
}

declare module '*/router'
declare module '*.js'
declare module 'nprogress'
declare module '@/config/api'
