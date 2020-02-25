import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Request from '../components/Request.vue'
import Episode from '../components/Episode.vue'
import Consult from '../components/Consult.vue'
import Change from '../components/Change.vue'
import Cancel from '../components/Cancel.vue'


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
    path : "/episode",
    name : "Episode",
    component : Episode
  },
  {
    path : "/consult",
    name : "Consult",
    component : Consult
  },
  {
    path : "/change",
    name : "Change",
    component : Change
  },
  {
    path : "/cancel",
    name : "Cancel",
    component : Cancel
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router