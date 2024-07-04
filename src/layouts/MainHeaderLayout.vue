<template>
  <div class="header">
    <div class="header-menu">
      <nav class="header-nav">
        <router-link class="nav-item" to="/">Главная</router-link>
        <router-link class="nav-item" to="/services">Оклейка автомобилей</router-link>
        <router-link class="nav-item" to="/ui">Детейлинг автомобилей</router-link>
        <router-link class="nav-item" to="/">Галерея работ</router-link>
      </nav>
      <div class="burger-btn">
        <img src="../assets/img/MxBurger.svg" alt="Burger" />
      </div>
    </div>
    <div class="header-content">
      <h1 class="header-content-title">CAR MUSC</h1>
      <MxDelimiter />
      <p class="header-content-text">
        Lorem ipsum dolor sit amet, consectetur<br />
        adipiscing elit. Vitae orci urna amet penatibus.
      </p>
      <MxBtn :text="'Наши услуги'" />
    </div>
  </div>
</template>


<script>
import MxDelimiter from '@/mixins/MxDelimiter.vue'
import MxBtn from '@/mixins/MxBtn.vue'

export default {
  name: 'MainHeaderLayout',
  components: {
    MxBtn,
    MxDelimiter
  }
}
</script>

<style scoped>
@import url('/src/assets/base.css');
.header {
  height: 100vh;
  width: 100vw;
  background: url('../assets/img/HeaderBg.png');
  background-repeat: no-repeat;
}

.header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  min-width: 1350px;
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 26px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-item {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  transition: 0.3s;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  font-weight: 400;
  font-size: 22px;
  height: 100%;
}

.nav-item:hover {
  color: #db3138;
}
.nav-item:active {
  color: #db3138;
}

.burger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
.header-content {
  margin-top: 237px;
  display: flex;
  width: 485px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
.header-content-title {
  font-size: 150px;
  font-family: 'ReformaGrotesk';
  font-weight: 700;
  color: #db3138;
  line-height: 188px;
  margin-bottom: 8px;
}
.header-content-text {
  font-size: 40px;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  line-height: 48px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>