import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app-vue-hash/' // 让它默认跳转到app-vue-hash
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  }
]

console.log(process.env.BASE_URL, '=====')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const childRoute = ['/app-vue-hash', '/app-vue-history'];
const isChildRoute = path => childRoute.some(item => path.startsWith(item))
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;

const mainWhiteList = ['/404']
// 待优化的点： 动态路由需要通过reg单独判断是否有效
const isEffectPath = path => routes.some(item => path === item.path)

router.beforeEach((to, from, next) => {
  console.log(to)
  if (mainWhiteList.includes(to.path)) {
    next()
    return
  }
  // 解决从子项目跳转到主项目样式丢失的问题
  if (isChildRoute(from.path) && !isChildRoute(to.path)) {
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  // 判断是否需要展示子应用的容器
  store.commit('setShowApp', isChildRoute(to.path))
  // 判断是否要重定向到404
  if (!isChildRoute(to.path)) {
    if (!isEffectPath(to.path)) {
      next('/404')
      return
    }
  }
  next();
});

export default router
