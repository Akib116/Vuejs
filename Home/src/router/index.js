/* eslint-disable no-dupe-keys */
/* eslint-disable vue/no-dupe-keys */
/* eslint-disable no-new */
import Vue from 'vue'
import Router from 'vue-router'

import PhotoGallery from '@/components/PhotoGallery.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: {path: 'PhotoGallery'}
    },
    {
      path: '/PhotoGallery',
      name: 'PhotoGallery',
      component: PhotoGallery
    }
  ]
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: {
    xmlns_1: 'https://picsum.photos/id/237/200/300'

  }
})
new Vue({
  el: '#sl',
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
    },
    tutorial_3: {
      title: 'Vue js is good',
      author: 'Akib',
      publishedAt: '2016-04-12'
    },
    tutorial_4: {
      title: 'Vue js is good',
      author: 'Akib1',
      publishedAt: '2016-04-13'
    },
    tutorial_5: {
      title: 'Vue js is good',
      author: 'Akib2',
      publishedAt: '2016-04-14'
    }
  }
})
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
const axios = require('axios')
new Vue({
  el: '#sl',
  data: {
    keyword: '',
    postList: []
  },
  computed: {
    filteredList () {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => { this.postList = response.data })
  }
})
