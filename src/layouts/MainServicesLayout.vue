<template>
  <div>
    <MainHeaderLayout />
  </div>
</template>

<script>
import MainHeaderLayout from '@/layouts/MainHeaderLayout.vue'

export default {
  name: 'MainServicesLayout',
  components: {
    MainHeaderLayout
  }
}
</script>

<style scoped>
.header-info-none {
  display: none;
}
</style>
