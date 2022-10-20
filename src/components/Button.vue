<script setup>

    const props = defineProps(["button"])

</script>

<template>
    <div>
        <button v-if="props.button.isActive" class="start" @click="props.button.handler" > {{props.button.text}} </button>
    </div>
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