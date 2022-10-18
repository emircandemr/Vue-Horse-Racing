<script setup>
import { onMounted, ref } from 'vue';
import Finish from './components/Finish.vue'
import Horse from './components/Horse.vue'
import {useStore} from "vuex"
import { computed } from '@vue/reactivity';
import Score from './components/Score.vue';

const store = useStore()

const horses = ref([
  {
    id : 1,
    name : 'Horse 1',
    speed : 0,
    position : 0,
    isFinished : false
  },
  {
    id : 2,
    name : 'Horse 2',
    speed :0,
    position : 0,
    isFinished : false
  },
  {
    id : 3,
    name : 'Horse 3',
    speed : 0,
    position : 0,
    isFinished : false
  },
  {
    id : 4,
    name : 'Horse 4',
    speed : 0,
    position : 0,
    isFinished : false
  },
])

onMounted(() => {
  store.commit("setHorses", horses.value)
})




</script>

<template>
  <div>
    {{list}}
    <Finish />
    <Horse v-for="horse in horses"  :horse="horse" />
    <Score  />
  </div>
</template>


<style lang="scss" scoped>

</style>