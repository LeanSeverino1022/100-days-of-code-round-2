<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

    import { eventBus } from '../main';

    export default {
        props: {
            userAge: Number,
            editAgeFn: Function
        },
        methods: {
            editAge() {
                this.userAge = 50; /* should I just delete this? */

                //commented line below to try out using event bus
                // this.$emit( "ageWasEdited", this.userAge );

                //communicate with userdetail directly without needing to pass through parent              

                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
