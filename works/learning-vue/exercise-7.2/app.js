//local registration https://vuejs.org/v2/guide/components-registration.html#Local-Registration
//here we use component of 


var cmp = {
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
}



new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
})

new Vue({
  el: '#app2',  
})

