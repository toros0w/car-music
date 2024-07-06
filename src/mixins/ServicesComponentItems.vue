<template>
  <div class="container">
    <div class="item">
      <img :src="itemLogo" alt="" class="services-logo" />
      <h2 class="services-title">{{ title }}</h2>
      <p class="services-text">{{ text }}</p>
      <MxBtn
        :customStyle="{
          width: '91px',
          height: '41px',
          'margin-top': '25px',
          'margin-bottom': '50px',
          'font-size': '18px'
        }"
        :text="'Подробнее'"
      />
    </div>
  </div>
</template>

<script>
import MxBtn from '@/mixins/MxBtn.vue'
export default {
  name: 'ServicesComponentItems',
  components: {
    MxBtn
  },
  props: {
    itemLogo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 306px;
  max-height: 428px;
  min-width: 306px;
  border: 1px solid #898989;
  align-items: center;
  text-align: center;
}
.item {
  max-width: 225px;
  margin-left: auto;
  margin-right: auto;
}
.services-logo {
  width: 70px;
  height: 57px;
  margin-top: 86px;
}
.services-title {
  margin-top: 27px;
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  color: #fff;
}
.services-text {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  color: #fff;
}
</style>