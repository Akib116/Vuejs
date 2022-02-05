import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Postdata from '../views/Postdata.vue'
import Post from "@/views/postdetails.vue"
import Postpage from "@/views/Postpage.vue";
import Putdata from "@/components/Putdata.vue";
import Deletedata from "@/components/Deletedata.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/postpage',
    name: 'Postpage',

    component: Postpage,
  },
  {
    path: '/akib',
    name: 'Akib',

    component: Home
  },
  {
    path: '/postdata',
    name: 'postdata',

    component: Postdata
  },
  {
    path: '/post/:id',
    name: 'postdetails',
    component: Post,
  },
  {
    path: '/putdata',
    name: 'Putdata',

    component: Putdata,
  },
  {
    path: '/deletedata',
    name: 'Deletedata',

    component: Deletedata,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
