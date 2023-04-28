<template>
  <CharacterTable
    @update-page="updateData"
    :page="page"
    :maxPage="maxPage"
    :characters="characters"
  />
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import CharacterTable from '~/components/CharacterTable.vue'

  const page = ref(1)
  const maxPage = ref(0)
  const characters = ref()

  function getCharacters() {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/people?page=${page.value}`)
      .then((res) => {
        maxPage.value = maxPage.value == 0 ? Math.ceil(res.data.count / 10) : maxPage.value
        characters.value = res.data.results
      })
  }

  function updateData(value: number) {
    page.value = value
    getCharacters()
  }

  onMounted(() => { 
    getCharacters()
  })
</script>

<style lang="sass">
</style>