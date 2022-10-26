<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { onBeforeMount, onMounted, onUpdated, ref } from "vue";


const horseStore = useHorseStore()

const chartData = ref({
    labels :  horseStore.getHorseName,
    datasets: [ 
        { 
            label : 'Winner Count',
            backgroundColor: '#cdcdcd',
            data: horseStore.getWinnerCount
        }
    ]
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  defineProps({
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default: 900
    },
    height: {
      type: Number,
      default: 500
    },
  })

</script>

<template>
    <div class="statistic">
      <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
      />
    </div>
</template>


<style lang="scss" scoped>

    .statistic {
        width: 100%;
        height: 100%;
        font-size: 12px;
        padding: 1rem;
        background-color: #121212;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;

    }


</style>