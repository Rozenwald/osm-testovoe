<template>
  <Chart
    :datasets="datasets"
    :labels="labels"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import Chart from '~/components/Chart.vue'

  const datasets = ref()
  const labels = ref()

  interface ICharacter {
    name: string,
    height: string,
  }

  function getData() {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/people?page=1`)
      .then((res) => {
        console.log(res)
        labels.value = res.data.results.map((el: ICharacter) => el.name)
        datasets.value = res.data.results.map((el: ICharacter) => el.height)
      })
  }

  onMounted(() => { 
    getData()
  })
</script>

<style lang="sass">
</style>