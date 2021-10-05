import Vue from 'vue'
import VueRouter from 'vue-router'
// import queryString from 'qs'
// import { TOKEN_KEY } from '@/config/constant'

Vue.use(VueRouter)

export const routes = [
  // {
  //   path: '/',
  //   redirect: '/workbench',
  // },
  // {
  //   path: '/workbench',
  //   // eslint-disable-next-line import/no-unresolved
  //   component: () => import(/* webpackChunkName: "workbench" */ '@/views/workbench'),
  //   children: [],
  //   meta: { title: '工作台' },
  // },

  { path: '*', name: '404', component: { render() { return <div>404</div> } } },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },

]
const router = new VueRouter({ routes })

router.beforeEach(async (to, from, next) => {
  next()
  // if (await auth()) {
  //   const title = to.meta.title || to.query.title
  //   if (typeof title === 'string' && document.title !== title) {
  //     document.title = title
  //   }
  //   next()
  // } else {
  //   // Toast('权限不足')
  //   Toast('权限验证失败，请在水管平台中查看')
  // }
})
export default router
