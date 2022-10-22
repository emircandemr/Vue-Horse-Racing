<script setup>
import { computed, reactive, ref } from "vue";
import {useStore} from "vuex"
import Finish from "../components/Finish.vue";
import Horse from "../components/Horse.vue";
import Score from "../components/Score.vue";
import Button from "../components/Button.vue";
import Countdown from "../components/Countdown.vue";
import LeaderBoard from "../components/LeaderBoard.vue";
import Sidebar from "../Layout/Sidebar.vue";
import Content from "../Layout/Content.vue";


// const horses = ref(computed(() => store.state.horses))
// const startFlag = computed(() => store.state.startFlag)

// const startHandler = () => {
//         buttons.value[0].isActive = false
//         buttons.value[1].isActive = true
//         store.commit("setCountdownActive", true)    
//     }
    
//     const againHandler = () => {
//         horses.value.forEach(horse => {
//             horse.position = 0
//             horse.speed = 0
//             horse.isFinished = false
//         });
//         store.commit("setCountdownActive", true)    
//     console.log("againHandler")
// }

// const buttons = ref([
//     {
//     text: "Play",
//     color: "green",
//     handler : startHandler,
//     isActive: true
//     },
//     {
//     text: "Play Again",
//     color: "blue",
//     handler : againHandler,
//     isActive: false
//     }
// ])

</script>

<template>
    <div class="main">
        <Sidebar></Sidebar>
        <div class="main--content">
            <Content></Content>
        </div>
        <!-- <Button v-for="button in buttons" :button="button" ></Button> -->
        <!-- <Finish /> -->
        <!-- <Horse v-for="horse in horses"  :horse="horse"  /> -->
        <!-- <Score  /> -->
        <!-- <LeaderBoard/> -->
    </div>
    <Teleport to="body">
        <Countdown></Countdown>
    </Teleport>
</template>


<style lang="scss" scoped>

.main {
    display: flex;
    width: 100%;
    height: 100vh;
    color: #fff;
    background-color: sandybrown;
    &--content {
        width: calc(100% - 380px);
        height: 100%;
        display: flex;
        place-items: center;    

    }
}

</style>