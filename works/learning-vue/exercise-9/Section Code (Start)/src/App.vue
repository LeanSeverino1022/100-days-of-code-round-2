<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="header">{{quote}}</h2>
                        <p>Yes it is a wonderful quote!</p>
                    </component>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';
    import New from './components/New.vue';
    import Author from './components/Author.vue';

    export default {
        data: function(){
            return {
                quote: 'My Quote - nice to learn slots!!',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appNew: New,
            appAuthor: Author
        }
    }
</script>

<style>

</style>
