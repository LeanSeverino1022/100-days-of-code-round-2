<template>
    <div>
        <div>
              <slot name="header"></slot>
              <span style="color:violet"><slot name="subtitle">default slot text</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
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