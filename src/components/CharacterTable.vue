<template>
  <table>
    <thead>
      <tr>
        <td v-for="item in mockData">
          {{ item }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.characters" :key="item">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.height }}
        </td>
        <td>
          {{ item.birth_year }}
        </td>
        <td>
          {{ item.gender }}
        </td>
      </tr>
    </tbody>
  </table>

  <div class="navigation">
    <button @click="previous()" class="navigation__btn"> &#9668 </button>
    <input
      v-model="paginationIndex"
      @input="choosePage()"
      class="navigation__input"
      type="number">
    <button @click="next()" class="navigation__btn"> &#9658 </button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    page: number,
    maxPage: number,
    characters: any,
  }>()
  const emits = defineEmits<{
    (event: "updatePage", page: number): void
  }>()

  const mockData = ['Имя', 'Рост', 'Дата рождения', 'Пол']

  const paginationIndex = computed({
    get() {
      return props.page
    },
    set(val) {
      emits('updatePage', val)
    }
  })

  function next() {
    if (props.page < props.maxPage) {
      const newPage = props.page + 1
      emits('updatePage', newPage)
    }
  }
  function previous() {
    if (props.page > 1) {
      const newPage = props.page - 1
      emits('updatePage', newPage)
    }
  }
  function choosePage() {
    if (props.page > 1 && props.page < props.maxPage) {
      emits('updatePage', props.page)
    }
  }
</script>

<style lang="sass">
table
  margin: 0 auto
  border: 3px solid #e5e5e5
  border-collapse: collapse

td
  border: 1px solid #e5e5e5
  padding: 12px

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button
  -webkit-appearance: none

.navigation
  margin: 32px 0
  display: flex
  &__btn
    width: 40px
    height: 40px
    font-size: 20px
    padding: 0
    margin: 0
    display: flex
    align-items: center
    justify-content: center
    border-radius: 100%
    background-color: #929292
    border: 2px solid #e5e5e5
  &__input
    width: 40px
    height: 40px
    margin: 0 24px
    display: flex
    justify-content: center
    text-align: center
    border-radius: 100%
    background-color: #929292
    border: 2px solid #e5e5e5
</style>
