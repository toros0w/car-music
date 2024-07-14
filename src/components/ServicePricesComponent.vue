<template>
  <div class="container">
    <PriceComponent :headers="headers" :priceItems="priceItems" />
  </div>
</template>

<script>
import PriceComponent from '@/components/PriceComponent.vue'
export default {
  name: 'ServicePricesComponent',
  components: {
    PriceComponent
  },
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: ['Пленка Spectroll', 'Пленка Hexis', 'Пленка SunTek', 'Пленка LLumar'],
      priceItems: [
        {
          carType: '1 класс (Mini cooper, Fiat 500)',
          prices: ['53 000', '64 000', '69 000', '72 000']
        },
        {
          carType: '2 класс (BMW 3, Mercedes)',
          prices: ['53 000', '64 000', '69 000', '72 000']
        },
        {
          carType: '4 класс (BMW 7, Mercedes S)',
          prices: ['53 000', '64 000', '69 000', '72 000']
        },
        {
          carType: '5 класс (BMW X3, X4, Mercedes)',
          prices: ['53 000', '64 000', '69 000', '72 000']
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 1300px;
  margin-top: 180px;
}
.title {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 52px;
  line-height: 73px;
}
.delim {
  margin-top: 40px;
  margin-bottom: 60px;
}
.price-wrapper {
  display: flex;
  flex-direction: column;
}
.price-header {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  min-height: 93px;
  align-items: center;
  border-top: 1px solid #898989;
  border-bottom: 1px solid #898989;
}
.price-option {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}
</style>
