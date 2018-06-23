import Vue from 'vue'
import Router from 'vue-router'

import Lobby from '@/pages/Lobby'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'lobby',
      component: Lobby
    }
  ]
})
