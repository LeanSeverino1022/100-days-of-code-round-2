<template>
    <div>
        <div>
              <slot name="header"></slot>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
       
    </div>
 
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid #ccc; 
        box-shadow: 1px 1px 3px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: blue;
    }
</style>