<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
import RacePath from '../components/Race/RacePath.vue';
import RaceCountdown from '../components/Race/RaceCountdown.vue';
import RaceFinishModal from '../components/Race/RaceFinishModal.vue';

</script>

<template>
    <div class="main">
        <Sidebar></Sidebar>
        <div class="main__content">
            <RacePath></RacePath>
        </div>
    </div>
    <Teleport to="#countdown">
        <RaceCountdown></RaceCountdown>
    </Teleport>
    <Teleport to="#finishModal">
        <RaceFinishModal></RaceFinishModal>
    </Teleport>
</template>


<style lang="scss" scoped>

.main {
    width: 100%;
    height: 100vh;
    display: flex;
    place-items: center;
    color: #fff;
    background-color: #212121;
    background-color: rgba(0, 0, 1, 0.982);
    
    &__content {
        width: calc(100% - 300px);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;    
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