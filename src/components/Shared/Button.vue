<script setup>

    const props = defineProps(["buttonHandler"])

</script>

<template>
    <button class="start" @click="props.buttonHandler" >
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>

button{
    width: 50px;
    height: 50px;
    background-color: #121212;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;

    &:hover{
        background-color: #fff;
        color: #121212;
    }

}

</style>