<script setup>
    import { onMounted, ref } from "vue";
    import RaceHorse from "./RaceHorse.vue";
    import RaceFinishFlag from "./RaceFinishFlag.vue";
    import Avatar from "../Shared/Avatar.vue";
    import { getHorses } from "../../services/horseService";
    import { useHorseStore } from "../../stores/use-horseData";

    const horseStore = useHorseStore();

    const horseList = ref([])

    onMounted(async () => {
        horseList.value = await getHorses() // get the list of horses from the firestore database
    })



</script>

<template>
    <div class="race">
        <div v-for="(horse,index) in horseList" :key="horse.id" class="race__path" 
        :class="{'active' : horse.id===horseStore.selectedHorse.id }">
        {{horse.stopwatch.minute}} : {{horse.stopwatch.seconds}} : {{horse.stopwatch.milliseconds}} 
            <div class="race__path--number">
                {{index + 1 }}
            </div>
            <div class="race__path--avatar" >
                <Avatar :item="horse" :size="40" ></Avatar>
            </div>
            <RaceHorse :horse="horse" /> <!--component where horses are listed  -->
        </div>
        <RaceFinishFlag></RaceFinishFlag> 
    </div>

</template>

<style lang="scss" scoped>
    .race{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding: 0px 10px;
        text-align: center;
        color: white;
        background-color: #121212;
        border-radius: 15px;
        margin-left: 15px;

        &__path{
            position: relative;
            width: 95%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            margin: 10px 0px;
            background-color: #212121;
            border-top: 2px solid gray;
            border-bottom: 2px solid gray;

            &--number{
                position: absolute;
                right: 30px;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid gray;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
                z-index: 2;
            }

            &--avatar{
                position: absolute;
                left: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
            }
        }
    }
    .active{
        border-top: 1px solid rgb(255,129,65);
        border-bottom: 1px solid rgb(255,129,65);
    }

    @media screen and (max-height: 800px){
        .race{
            height: 85vh;
        }

        .path{
            height: 50px;
        }
    }


</style>