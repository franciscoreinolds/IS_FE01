import Vue from 'vue'
import VueRouter from 'vue-router'

import List from '../components/List.vue'
import Report from '../components/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name : "List",
    component : List
  },
  {
    path : "/report",
    name : "Report",
    component : Report
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router