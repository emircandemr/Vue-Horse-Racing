<script setup>
import { onMounted } from "vue";
import {useHorseStore} from "../stores/use-horseData"
import {useRouter} from "vue-router"
import {getHorses} from "../services/horseService"
import Avatar from "../components/Shared/Avatar.vue";

const horseStore = useHorseStore()
const router = useRouter()

    
onMounted(async () => {
    horseStore.setHorses(await getHorses())
})

const selectHandler = (horse) => {
    horseStore.horses.map((item) => {
        return item.id === horse.id ? (item.isSelected = true) : (item.isSelected = false);
	});
    horseStore.setSelectHorse(horse)
}

const startHandler = () => {
    router.push({name : "Play"})
    horseStore.setCountdownActive(true)
}

</script>

<template>
    <div class="select" >
        <h1 class="select__title">Choose Your Avatar</h1>
        <div class="select__content">
            <button v-for="horse in horseStore.horses"
            :class = "{ 'active' : horse.isSelected }"
            :key="horse.name"
            data-test = "select-horse"
            @click="selectHandler(horse)">
                <Avatar :item="horse" :size="150" ></Avatar>
            </button>
        </div>
        <div class="select__start" >
            <button class="startButton" 
            v-if="horseStore.selectedHorse" 
            @click="startHandler">Start</button>
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
            width: 100%;
            height: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            font-family: 'Permanent Marker', cursive;
            letter-spacing: 5px;
            color: rgb(255,129,65);
        }

        &__content{
            max-width: 800px;
            height: 50%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            gap: 1rem;
            
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
                    border : 2px solid rgb(255,129,65);
                    border-radius: 50%;
                }
            }
            .active {
                border : 2px solid rgb(255,129,65);
                border-radius: 50%;
            }
        }
        &__start{
            width: 100%;
            height: 5%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            position: relative;
            bottom: 0;

            .startButton{
                position: relative;
                color: black;
                border-radius: 10px;
                padding: 0.7rem 2rem;
                font-family: 'Chakra Petch', sans-serif;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.8s;

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    color: #121212;
                    transition: all 0.8s;
                }

                &:hover{
                    &::before{
                        opacity: 0 ;
                        transform: scale(1,2);
                    }
                }

                &::after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    opacity: 0;
                    transition: all 0.8s;
                    border: 2px solid rgb(255,129,65);
                    border-radius: 8px;
                    transform: scale(1.5,1.5);
                }

                &:hover{
                    &::after{
                        opacity: 1;
                        transform: scale(1,1);
                    }
                }
            }
        }
    }

    // .active {
    //     border: 2px solid rgb(255,129,65);
    //     border-radius: 50%;
    // }
    @media screen and (max-width: 1200px){
        .select{
            &__title{
                font-size: 2rem;
            }
            &__content{
                width: 70%;
                height: 70%;
            }
        }
    }

    @media screen and (max-width: 768px){
        .select{

            &__title{
                font-size: 1.5rem;
            }

            &__content{
                width: 100%;
                height: 100%;
            }
        }
    }


</style>