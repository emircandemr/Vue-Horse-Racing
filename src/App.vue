<script setup>
import { computed} from 'vue';
import HomePage from './Pages/HomePage.vue';
import StartPage from './Pages/StartPage.vue';
import {useStore} from "vuex"
import Countdown from './components/Countdown.vue';


const store = useStore()

const isLoginActive = computed(() => store.state.isLoginPage)

</script>

<template>
  <StartPage v-if="isLoginActive" />
  <HomePage v-else />
  <Countdown></Countdown>
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