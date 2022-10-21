<script setup>
import Avatar from '../components/Avatar.vue';
import {useStore} from "vuex"
import { computed } from 'vue';
const store = useStore()

const selectedHorse = computed(()=> store.state.selectedHorse)

</script>

<template>
    <div class="header">
        <div class="header--avatar">
            <Avatar :item="selectedHorse" ></Avatar>
        </div>
        <div class="header--name">
            <h1>{{selectedHorse.name}}</h1>
        </div>
        <div class="header--rank">
            <p>Your are in {{selectedHorse.id}}. place </p>
        </div>
        <div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .header {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        background-color: red;
        z-index: 99;
        &--avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            margin: 0 2rem;
        }

        &--name {
            margin: 0 2rem;
            h1 {
                color: white;
                font-size: 2.5rem;
                font-weight: 400;
                span {
                    color: #ff0000;
                }
            }
        }

        &--rank {
            margin: 0 2rem;
            p {
                color: white;
                font-size: 1.5rem;
                font-weight: 400;
            }
        }
    }

</style>