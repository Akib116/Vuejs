// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#app',
  data: {
    tutorial_1: {
      title: 'Vue js',
      author: 'sadman',
      publishedAt: '2016-04-10'
    },
    tutorial_2: {
      title: 'Vue js is good',
      author: 'shakib',
      publishedAt: '2016-04-11'
    }
  }
})
