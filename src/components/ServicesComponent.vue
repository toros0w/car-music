<template>
  <div class="container">
    <h1 class="services-title">Наши услуги</h1>
    <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
    <div class="services-btns">
      <MxBtnServices
        :text="'Оклейка'"
        :customStyle="{ 'font-size': '32px', 'margin-right': '25px' }"
      />
      <MxBtnServices
        :text="'Детейлинг'"
        :customStyle="{ 'font-size': '32px', 'margin-left': '25px' }"
      />
    </div>
    <div class="items">
      <ServicesComponentItems
        :itemLogo="'/src/assets/img/services-logo-1.svg'"
        :title="'Защитные пленки'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
      /><ServicesComponentItems
        :itemLogo="'/src/assets/img/services-logo-2.svg'"
        :title="'Цветные пленки'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
      /><ServicesComponentItems
        :itemLogo="'/src/assets/img/services-logo-3.svg'"
        :title="'Дизайн'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
      /><ServicesComponentItems
        :itemLogo="'/src/assets/img/services-logo-4.svg'"
        :title="'Оклейка салона'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.'"
      />
    </div>
  </div>
</template>
<script>
import ServicesComponentItems from '@/mixins/ServicesComponentItems.vue'
import MxBtnServices from '@/mixins/MxBtnServices.vue'
export default {
  name: 'ServicesComponent',
  components: {
    ServicesComponentItems,
    MxBtnServices
  }
}
</script>

<style scoped>
.container {
  max-width: 1300px;
}
.items {
  display: flex;
  justify-content: space-between;
}
.services-btns {
  display: flex;
  text-align: center;
  justify-content: center;
}
.services-title {
  font-size: 52px;
  font-weight: 600;
  line-height: 73px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  color: #fff;
  margin-top: 108px;
  text-transform: uppercase;
}
.delim {
  margin-top: 40px;
}
.services-btns {
  margin-top: 61px;
}
.items {
  margin-top: 80px;
}
</style>