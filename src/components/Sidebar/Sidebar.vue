<script setup>
    import {useHorseStore} from "../../stores/use-horseData"
    import Avatar from "../Shared/Avatar.vue";
    import Score from "./Score.vue";
    const horseStore = useHorseStore()

</script>

<template>
    <div class="aside">
        <div class="aside--header">
            <Avatar :item="horseStore.selectedHorse" :size="100"></Avatar>
            <h1 class="aside--header--title">{{horseStore.selectedHorse.name}}</h1>
        </div>
        <div class="aside--content">
            <Score></Score>
        </div>
        <div class="aside--footer">
        </div>
    </div>
</template>

<style lang="scss" scoped>

.aside {
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

    &--header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &--title {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }

    &--content {
        width: 100%;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

}

</style>