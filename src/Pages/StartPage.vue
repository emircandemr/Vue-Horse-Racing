<script setup>
import { onMounted } from "vue";
import {useStore} from "vuex"
import horseData from "../assets/data/horses.json"


const store = useStore()

onMounted(() => {
  store.commit("setHorses", horseData)
})

const selectHandler = (item) => {
    console.log(item)
    store.commit("setSelectedHorse", item)
    store.commit("setLoginPage", false)
}

</script>

<template>
    <div class="select" >
        <div class="select--content" >
            <template v-for="item in horseData">
                <div class="select--horse" >
                    <img class="select--img" :src="item.img" @click="selectHandler(item.id)">
                </div>
            </template>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .select{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #121212;
        
        &--content{
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
            &--horse{
                width: 160px;
                height: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                color: #121212;
                border-radius: 20px;
                margin: 10px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
            }
                &--img{
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                }



    }

</style>