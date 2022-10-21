<script setup>

</script>

<template>
    <div class="aside">
        <div class="aside--header">
        </div>
        
        <div class="aside--content">

        </div>

        <div class="aside--footer">

        </div>


    </div>
</template>

<style lang="scss" scoped>

.aside {
    width: 250px;
    height: 100vh;
    background-color: greenyellow;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    &--header {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--content {
        width: 100%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--footer {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

}

</style>