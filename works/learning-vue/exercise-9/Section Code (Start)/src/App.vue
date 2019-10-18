<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h2>A wonderfule Quote</h2>
                   <p>Yes it is a wonderful quote!</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';

    export default {
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
</style>
