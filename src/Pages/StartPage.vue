<script setup>
import { onMounted } from "vue";
import {useStore} from "vuex"
import horseData from "../assets/data/horses.json"
import Avatar from "../components/Avatar.vue";

const store = useStore()

onMounted(() => {
  store.commit("setHorses", horseData)
})


</script>

<template>
    <div class="select" >
        <h1 class="select--title">Choose Your Avatar</h1>
        <div class="select--content" >
                <Avatar v-for="item in horseData" :item="item" ></Avatar>
                <!-- <div class="select--horse" >
                    <img class="select--img" :src="item.img" @click="selectHandler(item.id)">
                </div> -->
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
        }
    }

</style>