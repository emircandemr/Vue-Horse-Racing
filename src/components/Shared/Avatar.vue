<script setup>
    const props = defineProps(["item","size"])
</script>

<template>
    <div class="avatar" :style="{width : `${props.size}px`, height : `${props.size}px` }" >
        <img class="avatar--img" :src="props.item.img" :alt="props.item.name">
    </div>
</template>

<style lang="scss" scoped>

    .avatar{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 50%;
        &--img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.5s ease all; 
            &:hover{
                transform: scale(1.2);
            }
        }
    }

</style>