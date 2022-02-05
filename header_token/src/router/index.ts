import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Gettoken from "../views/Gettoken.vue";
import Puttoken from "../views/Puttoken.vue";
import Getparams from "../views/Getparams.vue";
import Detailspage from "../views/Detailspage.vue";
import Nextpage from "../views/Nextpage.vue";
import Previouspage from "../views/Previouspage.vue";
import Jobdetails from "../views/Jobdetails.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/home/',
    name: 'Home',
    component: Home
  },

  {
    path: '/gettoken',
    name: 'gettoken',
    component: Gettoken
  },
  {
    path: '/puttoken',
    name: 'puttoken',
    component: Puttoken
  },
  {
    path: '/getparams',
    name: 'getparams',
    component: Getparams
  },
  {
    path: '/detailspage/:slug',
    name: 'detailspage',
    component: Detailspage,
    props: true,
  },
  {
    path: '/nextpage',
    name: 'nextpage',
    component: Nextpage,
  },
  {
    path: '/previouspage',
    name: 'previouspage',
    component: Previouspage,
  },
  {
    path: '/jobdetails/:slug/job-circulars/:id',
    name: 'jobdetails',
    component: Jobdetails,
    props: true,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
