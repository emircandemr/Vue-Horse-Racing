<script setup>
import { computed, onMounted, ref } from 'vue';
import horseData from "./assets/data/horses.json"
import HomePage from './Pages/HomePage.vue';
import StartPage from './Pages/StartPage.vue';
import {useStore} from "vuex"


const store = useStore()

const isLoginActive = computed(() => store.state.isLoginPage)

</script>

<template>
  <StartPage v-if="isLoginActive" />
  <HomePage v-else />
</template>


<style lang="scss" scoped>

  .start {
    padding: 10px;
    background-color: #dcdcdc;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #fff;
    }

  }

</style>