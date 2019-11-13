<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote">        
        </app-new-quote>
        <app-quote-grid @quoteDeleted="deleteQuote" v-bind:quotes="quotes">

        </app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it.</div>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue';
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    "Just a sample quote for now!",
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete some quotes first.');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {        
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
