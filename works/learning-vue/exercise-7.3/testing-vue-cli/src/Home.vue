<template>
    <div>
        <app-server-status v-for="x in 5"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>