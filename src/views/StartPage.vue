<script setup>
import { onMounted, ref } from "vue";
import {useHorseStore} from "../stores/use-horseData"
import {useRouter} from "vue-router"
import Avatar from "../components/Shared/Avatar.vue";
import {getHorses} from "../services/horseService"

const horseStore = useHorseStore()
const router = useRouter()

onMounted(async () => {
    horseStore.setHorses(await getHorses())
})

const startHandler = () => {
    router.push("/home")
    horseStore.setCountdownActive(true)
    // updateHorse(horseStore.selectedHorse.id, horseStore.selectedHorse)
}
</script>

<template>
    <div class="select" >
        <h1 class="select--title">Choose Your Avatar</h1>
        <div class="select--content" >
            <Avatar v-for="item in horseStore.horses" :item="item" :size="180" ></Avatar>
        </div>
        <div class="select--start" >
            <button v-if="horseStore.selectedHorse" @click="startHandler">Start</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .select{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #121212;
        color: white;

        &--title{
            color: white;
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
        
        &--content{
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        &--start{
            width: 100%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;

            button{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: none;
                background-color: white;
                color: black;
                font-size: 1.5rem;
                cursor: pointer;
            }
        }

    }

</style>