<template>
  <div class="appbar">
    <button @click="route('characters')" class="appbar__btn"> Список персонажей </button>
    <button @click="route('charts')" class="appbar__btn"> График </button>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterView, useRouter } from 'vue-router'
  const router = useRouter()
  function route(name: string) {
    router.push({ name: `${name}` })
  }
</script>

<style lang="sass">
  .appbar
    position: fixed
    top: 0
    &__btn
      color: #e5e5e5
      padding: 12px 24px
      border-radius: 48px
      border: 1px solid #e5e5e5
      margin: 12px
      cursor: pointer
      &:hover
        background-color: #959595
</style>
