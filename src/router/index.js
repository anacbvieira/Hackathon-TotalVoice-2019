import Vue from 'vue'
import VueRouter from 'vue-router'
import AlterFlight from '../views/AlterFlight.vue'
import SelectFlight from '../views/SelectFlight.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/selectflight',
      name: 'selectflight',
      component: SelectFlight
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/alterflight',
      name: 'alterflight',
      component: AlterFlight
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (to.fullPath === '/logout') {
    localStorage.setItem('token', 'invalid')
  }
  const loggedIn = localStorage.getItem('token')

  if (authRequired && (!loggedIn || loggedIn === 'invalid')) {
    return next('/login')
  }

  next()
}
)

export default router
