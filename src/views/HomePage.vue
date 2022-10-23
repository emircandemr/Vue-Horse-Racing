<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
import Content from '../components/Content/Content.vue';
import Countdown from '../components/Content/Countdown.vue';
import LeaderBoard from '../components/Content/LeaderBoard.vue';


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
    <Teleport to="body">
        <LeaderBoard></LeaderBoard>
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