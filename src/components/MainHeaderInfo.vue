<template>
  <div class="header-info">
    <p class="header-text">{{ title }}</p>
    <h1 class="header-title">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderInfo',
  props: {
    text: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header-info {
  margin-top: 60px;
  min-height: 213px;
  border-top: 1px solid #898989;
  border-right: 1px solid #898989;
  text-align: center;
  padding-top: 60px;
  flex: 1 1 0; /* Allow items to grow and shrink as needed */
  box-sizing: border-box;
}

.header-title {
  color: #db3138;
  font-size: 24px;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  text-transform: uppercase;
}

.header-text {
  color: white;
  font-size: 18px;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 20px;
}
</style>
