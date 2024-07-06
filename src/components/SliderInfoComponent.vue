<template>
  <div class="container">
    <div class="slider-info-items">
      <div class="title-and-logo">
        <img :src="itemLogo" alt="" class="items-logo" />
        <h2 class="item-title">{{ title }}</h2>
      </div>
      <p class="item-text">{{ text }}</p>
      <img :src="itemDelim" alt="" class="delim" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderInfoComponent',
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
    },
    itemDelim: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.container {
  width: 526px;
}
.title-and-logo {
  display: flex;
  justify-content: left;
  align-items: center;
}
.items-logo {
  width: 57px;
  height: 70px;
}
.item-title {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  font-family: 'ReformaGrotesk';
  text-transform: uppercase;
  margin-left: 37px;
}
.item-text {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  font-family: 'ReformaGrotesk';
  text-align: left;
  max-width: 470px;
  margin-top: 31px;
}
.delim {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
