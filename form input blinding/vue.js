new Vue({
    el: '...',
    data: {
    checkedNames: []
    }
  })


 var example2= new Vue({
    el:'#app_2',
    data: {
      selected: ''
    }
  })

  new Vue({
    el: '...',
    data: {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  })