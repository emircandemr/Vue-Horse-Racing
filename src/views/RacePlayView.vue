<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
import RacePath from '../components/Race/RacePath.vue';
import RaceCountdown from '../components/Race/RaceCountdown.vue';
import RaceFinishModal from '../components/Race/RaceFinishModal.vue';
import {useHorseStore} from  "../stores/use-horseData"


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
        <div class="main__content">
            <RacePath></RacePath>
        </div>
    </div>
    <Teleport to="body">
        <RaceCountdown></RaceCountdown>
    </Teleport>
    <Teleport to="body">
        <RaceFinishModal></RaceFinishModal>
    </Teleport>
</template>


<style lang="scss" scoped>

.main {
    display: flex;
    place-items: center;
    width: 100%;
    height: 100vh;
    color: #fff;
    background-color: #212121;
    background-color: rgba(0, 0, 1, 0.982);
    &__content {
        width: calc(100% - 280px);
        height: 100%;
        display: flex;
        place-items: center;    

    }
}

@media screen and (max-width: 768px) {
    .main {
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
        }
    }
}


</style>