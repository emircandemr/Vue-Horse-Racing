<script setup>
import { ref } from "vue";
import {useStore} from "vuex"
import Finish from "../components/Finish.vue";
import Horse from "../components/Horse.vue";
import Score from "../components/Score.vue";

const store = useStore()

const horses = ref(store.state.horses)



const startHandler = () => {
  store.commit("setStartFlag", true)
  store.commit("setLoginPage", false)
}




</script>

<template>
    <div>
        <button class="start" @click="startHandler" > Start </button>
        <h1>{{store.state.selectedHorse}}</h1>
    </div>
    <div>
        <Finish />
        <Horse v-for="horse in horses"  :horse="horse" />
        <Score  />
    </div>
</template>


<style lang="scss" scoped>

</style>