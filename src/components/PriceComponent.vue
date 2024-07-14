<template>
  <div class="container">
    <div class="title">Стоимость полной оклейки<br />автомобиля</div>
    <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
    <table class="price-table">
      <thead>
        <tr class="top-content">
          <th>авто / Материал</th>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(priceItem, index) in priceItems" :key="index">
          <td v-html="formatCarType(priceItem.carType)" class="car-type"></td>
          <td v-for="(price, index) in priceItem.prices" :key="index" class="price">{{ price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PriceComponent',
  props: {
    headers: {
      type: Array,
      required: true
    },
    priceItems: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every((item) => typeof item.carType === 'string' && Array.isArray(item.prices))
      }
    }
  },
  methods: {
    formatCarType(carType) {
      return carType.replace('(', '<br>(')
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
  height: 150px; /* Высота заголовка */
}

.delim {
  margin-top: 40px;
  margin-bottom: 60px;
}

.price-table {
  border-top: 1px solid #898989;
  width: 100%;
  border-collapse: collapse;
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-size: 24px;
  text-transform: uppercase;
}

.price-table th,
.price-table td {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #898989;
  padding: 10px;
  text-align: center;
}

.price-table th {
  font-weight: 600;
}

.price-table td.car-type {
  color: #db3138;
}

.price-table td.price {
  color: #898989;
}
</style>
