import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../page/Msite/Msite.vue'
import Order from '../page/Order/Order.vue'
import Profile from '../page/Profile/Profile.vue'
import Search from '../page/Search/Search.vue'
import Login from '../page/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
