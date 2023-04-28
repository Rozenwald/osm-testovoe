<template>
  <div id="chart">
    <canvas ref="graph"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { Chart } from 'chart.js'
  import { ref, watch, toRaw } from 'vue';
  import {  BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'
  import type { ChartItem, ChartConfiguration } from 'chart.js'

  const props = defineProps<{
    labels: any,
    datasets: any,
  }>()

  Chart.register(
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  )

  const graph = ref<ChartItem | null>(null)

  function createChart() {
    const labels = toRaw(props.labels)
    const data = toRaw(props.datasets)
    const datasets = [
      {
        label: 'Character Heights',
        backgroundColor: '#9BD0F5',
        data,
      }
      
    ]
    console.log(labels)
    console.log(datasets)
  
    const ctx: ChartItem = graph.value as ChartItem
    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels,
        datasets,
      },
      options: {
        scales: {
          x: {
            grid: {
              color: '#e5e5e5',
            },
            ticks: {
              color: '#e5e5e5',
              display: true
            }
          },
          y: {
            grid: {
              color: '#e5e5e5',
            },
            ticks: {
              color: '#e5e5e5',
            }
          }
        }
      }
    }

    const chart = new Chart(
      ctx,
      config,
    )

    chart
  }

  watch(props, () => {
    if (props.labels !== false && props.datasets !== false) {
      createChart()
    }
  })

</script>

<style lang="sass">
  #chart
    min-width: 80%
    min-height: 80%
</style>
