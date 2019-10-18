<template>
    <div>
       <h3>New Quote</h3>
       <button @click="counter+=1">Increase</button>
       <p>{{ counter }}</p>
    </div>
</template>

<script>
 export default {
     data: function() {
         return {
             counter: 0
         }
     },
     destroyed() {
         console.log('component destroyed');
     },
     activated() {
         alert('activated');
     },
     deactivated() {
         alert('deactivated');
     },
 }
</script>

<style>

</style>