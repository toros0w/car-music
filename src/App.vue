<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()

const updateMeta = (routeName) => {
  let title = ''
  let desc = ''
  let keywords = ''

  switch (routeName) {
    case 'Main':
      title = 'Главная'
      desc = 'Описание главной страницы'
      keywords = 'главная, дом, старт'
      break
    case 'Services':
      title = 'Наши услуги'
      desc = 'Описание страницы услуг'
      keywords = 'услуги, сервис'
      break
    case 'UiKit':
      title = 'UiKit'
      desc = 'Описание страницы UiKit'
      keywords = 'uikit, интерфейс, дизайн'
      break
  }

  useHead({
    title: title,
    meta: [
      {
        name: 'description',
        content: desc
      },
      {
        name: 'keywords',
        content: keywords
      }
    ]
  })
}

watch(
  () => route.name,
  (newRouteName) => {
    updateMeta(newRouteName)
  },
  { immediate: true }
)
</script>

<style scoped>
div {
  overflow-x: hidden;
}
</style>
