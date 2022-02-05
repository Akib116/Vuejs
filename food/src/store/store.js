import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [{id: 1, name: 'Shopping at 7', done: true}, {id: 2, name: 'Learn Vuex', done: true},
      {id: 3, name: 'gaming', done: false}],

    count: 0
  }
})
