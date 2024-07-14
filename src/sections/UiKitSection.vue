<template>
  <div class="container">
    <h1 class="table">ТАБЛИЦА</h1>
    <PriceComponent :headers="headers" :priceItems="priceItems" />
    <AnswerLayout />
    <FooterComponent />
  </div>
</template>

<script>
import PriceComponent from '@/components/PriceComponent.vue'
import AnswerLayout from '@/layouts/AnswerLayout.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'UiKitSection',
  components: {
    PriceComponent,
    AnswerLayout,
    FooterComponent
  },
  data() {
    return {
      headers: ['Пленка Spectroll', 'Пленка Hexis', 'Пленка SunTek', 'Пленка LLumar'],
      priceItems: [
        {
          carType: '5 класс (BMW X3, X4, Mercedes)',
          prices: ['53 000', '64 000', '69 000', '72 000']
        }
      ]
    }
  },
  mounted() {
    this.hideElements()
  },
  methods: {
    hideElements() {
      const title = this.$el.querySelector('.title')
      const delim = this.$el.querySelector('.delim')
      if (title) title.style.display = 'none'
      if (delim) delim.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.container {
  /* width: 1300px; */
  margin-top: 180px;
}
.table {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 52px;
  line-height: 73px;
}
</style>
