import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Request from '../components/Request.vue'
import List from '../components/List.vue'
import Episode from '../components/Episode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
  {
    path : "/list",
    name : "List",
    component : List
  },
  {
    path : "/episode",
    name : "Episode",
    component : Episode
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router