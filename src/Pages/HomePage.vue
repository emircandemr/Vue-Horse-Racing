<script setup>
import {useStore} from "vuex"


const store = useStore()
</script>

<template>
    <div>
        <button class="start" @click="startHandler" > Start </button>
        <h1>{{store.state.selectedHorse}}</h1>
    </div>
    <div>
        <!-- <Finish />
        <Horse v-for="horse in horses"  :horse="horse" />
        <Score  /> -->
    </div>
</template>


<style lang="scss" scoped>

</style>