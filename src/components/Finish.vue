<script setup>

import { onMounted, ref } from 'vue';
import {useStore} from "vuex"

const store = useStore()

const flag = ref()

onMounted(() => {
    console.log(flag)
    store.commit("setFinishFlag", flag.value.offsetLeft)
})

</script>

<template>
    <div ref="flag" class="finish--line">
        <div class="finish--line--flag"></div>
    </div>
</template>


<style lang="scss" scoped>

    .finish--line {
        position: absolute;
        top: 0;
        right: 250px;
        width: 5px;
        height: 100vh;
        background-color: #fff;
        z-index: 1;
    }
    

</style>