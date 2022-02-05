import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/pages/login'
import admin from '@/components/pages/admin/admin'
import category from '@/components/pages/admin/category'
import Supplier from '@/components/pages/admin/Supplier'
import Product from '@/components/pages/admin/Product'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: {path: "login"}
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: {path: "/admin/category"},
      children : [
        {
          path: 'category',
          name: 'admin.category',
          component: category
        },

        {
          path: 'supplier',
          name: 'admin.supplier',
          component: Supplier
        },

        {
          path: 'product',
          name: 'admin.product',
          component: Product
        },

      ]
    },

   
  ],

  mode: "history"
})
