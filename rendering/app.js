
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })



  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })


  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })


  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { title: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })


  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })


  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '',
      message_1: 'https://picsum.photos/id/237/200/300',
    }
  })

  var app = new Vue({
    el: '#sl',
    data: {
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  })


  var example1 = new Vue({
    el: '#ab',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })