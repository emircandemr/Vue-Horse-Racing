<script setup>
    import {useHorseStore} from "../stores/use-horseData"
    const horseStore = useHorseStore()


    const props = defineProps(["item"])

    const selectHandler = (item) => {
        horseStore.setSelectHorse(item)
}

</script>

<template>
    <div class="avatar" >
        <img class="avatar--img" :src="props.item.img" @click="selectHandler(item)">
    </div>
</template>

<style lang="scss" scoped>

    .avatar{
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        &--img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.5s ease all; 

            &:hover{
                transform: scale(1.1);
            }

        }
    }

</style>