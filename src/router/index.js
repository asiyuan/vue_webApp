import Vue from 'vue'
import Router from 'vue-router'
import '@/common/stylus/reset.styl'

import Msite from '../page/Msite/Msite.vue'
import Order from '../page/Order/Order.vue'
import Profile from '../page/Profile/Profile.vue'
import Search from '../page/Search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
