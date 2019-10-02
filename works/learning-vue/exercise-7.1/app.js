
// var data = {
//     status: 'Critical',
// }

Vue.component('my-cmp', {
  // data: function(){
  //   return data
  // },
  data: function(){
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  },
  template: '<p>Server Status: {{ status }} <button v-on:click="changeStatus">Change</button></p> '
});

new Vue({
  el: '#app',
})

new Vue({
  el: '#app2',
})

