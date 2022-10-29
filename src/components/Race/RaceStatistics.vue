<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {  ref } from "vue";
import {getHorses} from "../../services/horseService"


const horses = await getHorses()

const chartData = ref({
    labels :  horses.map(horse => horse.name),
    datasets: [ 
        { 
            label : 'Winner Count',
            backgroundColor: '#cdcdcd',
            data: horses.map(horse => horse.winnerCount)
        }
    ]
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
    <div class="statistic">
      <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :style="{width: '90%', height: '90%'}"
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