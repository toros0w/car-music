<template>
  <div>
    <button :class="cls">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'MxBtn',
  props: {
    text: {
      type: String,
      required: true
    },
    cls: {
      type: String,
      required: false,
      default: 'main-btn'
    }
  }
}
</script>

<style scoped>
.main-btn {
  font-family: 'ReformaGrotesk';
  font-size: 24px !important;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 5%;
  width: 366px;
  height: 106px;
  border: none;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: white;
  z-index: 1;
}

.main-btn::before {
  content: '';
  position: absolute;
  top: 0; /* Change to top instead of bottom */
  left: 0;
  width: 100%;
  height: 70%; /* Initial height */
  background-color: #db3138;
  transition: height 0.3s ease;
  z-index: -1;
}

.main-btn:hover::before {
  height: 100%; /* Height on hover */
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
