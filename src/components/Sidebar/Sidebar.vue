<script setup>
    import { computed } from "vue";
    import {useHorseStore} from "../../stores/use-horseData"
    import Avatar from "../Shared/Avatar.vue";
    import SidebarScore from "./SidebarScoreboard.vue";
    
    const horseStore = useHorseStore()

    const selectedHorsePlace = computed(() => {
        return horseStore.sortHorses?.findIndex(horse => horse.id === horseStore.selectedHorse.id)
    })

</script>

<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <Avatar :item="horseStore.selectedHorse" :size="100"></Avatar>
            <h1 class="sidebar__header--title">{{horseStore.selectedHorse.name}}</h1>
            <p class="sidebar__header--place" v-if="selectedHorsePlace > -1" >You are in {{selectedHorsePlace+1}}. place</p>
        </div>
        <div class="sidebar__content"> 
            <SidebarScore></SidebarScore>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.sidebar {
    width: 250px;
    height: 80vh;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    margin-left: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    &__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &--title {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
        &--place {
            color: rgb(255,129,65);
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
    &__content {
        width: 100%;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 1000px) {
    .sidebar {
        width: 200px;
        height: 80vh;
        margin-left: 15px;
    }
}

@media screen and (max-width: 768px) {
    .sidebar {
        width: 0px;
        visibility: hidden;
    }
}

@media screen and (max-height: 800px){
        .sidebar{
            height: 85vh;
        }
    }


</style>