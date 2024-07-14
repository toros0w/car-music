<template>
  <div class="container">
    <div class="copyrights">
      2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
    </div>
    <div class="footer-menu">
      <nav class="footer-nav">
        <router-link class="nav-item" to="/">Главная</router-link>
        <router-link class="nav-item" to="/services">Оклейка автомобилей</router-link>
        <router-link class="nav-item" to="/ui">Детейлинг автомобилей</router-link>
        <router-link class="nav-item" to="/">Галерея работ</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 1300px;
  min-width: 1300px;
  min-height: 90px;
  max-height: 90px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -9999px;
  width: 20000px;
  height: 1px;
  background-color: #898989;
}
.copyrights {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-transform: uppercase;
}
.footer-menu {
  display: flex;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  gap: 42px;
}
.nav-item {
  color: #fff;
  text-decoration: none;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  transition: 0.3s;
}
.nav-item:hover {
  color: #db3138;
}

.nav-item:active {
  color: #db3138;
}
</style>