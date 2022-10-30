<script setup>

    const props = defineProps(["button"])

</script>

<template>
    <button class="btn" @click="props.button.handler">{{props.button.text}}</button>
</template>

<style lang="scss" scoped>
.btn{
    min-width: 80px;
    position: relative;
    background: #121212;
    color: aliceblue;
    margin-right: 1rem;
    border-radius: 10px;
    padding: 0.8rem;
    font-family: 'Chakra Petch', sans-serif;
    cursor: pointer;
    transition: all 0.8s;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        color: #121212;
        transition: all 0.8s;
    }

    &:hover{
        &::before{
            opacity: 0 ;
            transform: scale(1,2);
        }
    }

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.8s;
        border: 2px solid gray;
        border-radius: 8px;
        transform: scale(1.3,1.3);
    }

    &:hover{
        &::after{
            opacity: 1;
            transform: scale(1,1);
        }
    }
        }


</style>