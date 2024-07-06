<template>
  <div>
    <button :style="customStyle" :class="cls">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'MxBtnServices',
  props: {
    text: {
      type: String,
      required: true
    },
    cls: {
      type: String,
      required: false,
      default: 'main-btn'
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.main-btn {
  font-family: 'ReformaGrotesk';
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 5%;
  width: 169px;
  height: 61px;
  border: none;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: white;
  font-size: 16px;
  z-index: 1;
  text-transform: uppercase;
}

.main-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #db3138;
  transition: width 0.5s ease;
  z-index: -1;
}

.main-btn:hover::before {
  width: 100%;
}

.main-btn::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: -1;
}
</style>
