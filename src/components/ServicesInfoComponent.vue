<template>
  <div class="container">
    <div class="info-wrapper">
      <div class="info-title">
        Полиуретановая пленка единственная надежная защита автомобиля от всех внешних воздействий
      </div>
      <img src="/src/assets/img/MxDelimiter.svg" alt="" class="info-delim" />
      <p class="info-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam
        tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu
      </p>
      <div class="info-logo-wrapper">
        <div class="logo-row">
          <img src="/src/assets/img/voys.svg" alt="" class="info-logo" />
          <img src="/src/assets/img/star.svg" alt="" class="info-logo" />
        </div>
        <div class="logo-row">
          <img src="/src/assets/img/star.svg" alt="" class="info-logo" />
          <img src="/src/assets/img/voys.svg" alt="" class="info-logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesInfoComponent'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 526px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: 50px;
}
.info-title {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 32px;
  line-height: 45px;
}
.info-delim {
  margin-top: 50px;
  margin-bottom: 50px;
}
.info-text {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 50px;
}
.info-logo-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.logo-row {
  display: flex;
  gap: 100px;
  align-items: center;
  text-align: center;
}
.logo-row:first-child {
  padding-top: 50px;
}

.logo-row:last-child {
  margin-top: 50px;
}
</style>