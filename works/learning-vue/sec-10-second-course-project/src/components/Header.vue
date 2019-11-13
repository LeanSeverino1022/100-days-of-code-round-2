<template>
    
    <div class="row">
        <div class="col-sm-12">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                :style="{ width:  quoteCount/maxQuotes * 100 + '%'}">
                    <span>{{ quoteCount }} / {{ maxQuotes }}</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            quoteCount: Number,
            maxQuotes: Number
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    .row {
        margin-top: 20px;
    }
 
</style>
