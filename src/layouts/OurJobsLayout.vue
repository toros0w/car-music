<template>
  <div class="container">
    <h1 class="our-jobs-title">Наши работы</h1>
    <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
    <MxOurJobsItems />
  </div>
</template>

<script>
import MxOurJobsItems from '@/mixins/MxOurJobsItems.vue'
export default {
  name: 'OurJobsLayout',
  components: { MxOurJobsItems }
}
</script>

<style scoped>
.container {
  margin-top: 115px;
  position: relative;
  min-width: 100vw;
}
.our-jobs-title {
  font-family: 'ReformaGroteskDemiC';
  font-size: 52px;
  line-height: 73px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 40px;
}
.delim {
  margin-bottom: 60px;
}
</style>