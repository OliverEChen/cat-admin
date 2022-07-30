import router from './router'

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  const ACCESSLOGIN = window.localStorage.getItem('isLogin')
  if (ACCESSLOGIN) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

// router.afterEach(() => {
// });

export default router
