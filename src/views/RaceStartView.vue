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
    horseStore.setSortTyr(await getHorses())
})

const selectHandler = (horse) => {
    horseStore.setSelectHorse(horse)
}

const startHandler = () => {
    router.push("/home")
    horseStore.setCountdownActive(true)
}

</script>

<template>
    <div class="select" >
        <h1 class="select__title">Choose Your Avatar</h1>
        <div class="select__content">
            <button v-for="horse in horseStore.horses"
            :key="horse.name"
            data-test = "select-horse"
            @click="selectHandler(horse)">
                <Avatar :item="horse" :size="150" ></Avatar>
            </button>
        </div>
        <div class="select__start" >
            <button v-if="horseStore.selectedHorse" @click="startHandler">Start</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .select{
        width: 100%;
        height: 100vh;
        background-color: #121212;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;

        &__title{
            color: white;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            font-family: 'Permanent Marker', cursive;
            letter-spacing: 5px;
            color: #ee2961;
        }

        &__content{
            width: 50%;
            height: 50%;
            display : grid ;
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: repeat(3,1fr);
            grid-gap: 2rem;
            
            button{
                width: 180px;
                height: 180px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #212121;
                border: 2px solid gray;
                border-radius: 50%;
                &:hover{
                    border : 2px solid #ee2961;
                    border-radius: 50%;
                }

            }

        }

        &__start{
            width: 100%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            button{
                border-radius: 50%;
                padding: 2rem 1.5rem;
                background-color: white;
                color: black;
                border: 2px solid #ee2961;
                font-size: 1.5rem;
                font-family: 'Permanent Marker', cursive;
                cursor: pointer;
                &:hover{
                    background-color: #ee2961;
                    color: white;
                }
            }
        }
    }

</style>