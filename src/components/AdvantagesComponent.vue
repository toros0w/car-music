<template>
  <div class="container">
    <div class="advantages-title">Преимущества защитной антигравийной пленки</div>
    <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
    <div class="advantages-items-wrapper">
      <ServicesComponentItems
        class="item"
        :itemLogo="'/src/assets/img/services-logo-1.svg'"
        :title="'Ipsum convallis'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
        :showButton="false"
      /><ServicesComponentItems
        class="item"
        :itemLogo="'/src/assets/img/services-logo-2.svg'"
        :title="'Felis purus'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
        :showButton="false"
      /><ServicesComponentItems
        class="item"
        :itemLogo="'/src/assets/img/services-logo-3.svg'"
        :title="'Enim praesent'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
        :showButton="false"
      /><ServicesComponentItems
        class="item"
        :itemLogo="'/src/assets/img/services-logo-4.svg'"
        :title="'Aliquam tellus'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
        :showButton="false"
      />
    </div>
  </div>
</template>

<script>
import ServicesComponentItems from '@/mixins/ServicesComponentItems.vue'
export default {
  name: 'AdvantagesComponent',
  components: {
    ServicesComponentItems
  }
}
</script>

<style scoped>
.container {
  width: 1300px;
  flex-direction: column;
  margin-top: 180px;
}
.advantages-title {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 52px;
  line-height: 72px;
}
.delim {
  margin-top: 40px;
}
.advantages-items-wrapper {
  display: flex;
  flex-wrap: nowrap;
}
.item {
  padding-bottom: 60px;
  margin-top: 60px;
}
</style>