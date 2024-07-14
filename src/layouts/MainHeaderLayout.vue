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
      <h1 class="header-content-title" :style="customStyle">{{ title }}</h1>
      <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
      <p class="header-content-text">{{ text }}</p>
      <MxBtn :text="btnText" :customStyle="btnStyle" />
    </div>
    <div class="header-info-container">
      <!-- <MainHeaderInfo
        v-for="(info, index) in headerInfos"
        :key="index"
        :text="info.text"
        :title="info.title"
        :cls="cls"
      /> -->
    </div>
  </div>
  <div class="container"></div>
</template>

<script>
import MxBtn from '@/mixins/MxBtn.vue'
// import MainHeaderInfo from '@/components/MainHeaderInfo.vue'

export default {
  name: 'MainHeaderLayout',
  components: {
    MxBtn
    // MainHeaderInfo
  },
  props: {
    cls: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    customStyle: {
      type: Object,
      required: false,
      default: () => ({})
    },
    btnText: {
      type: String,
      required: true
    },
    btnStyle: {
      type: Object,
      required: false,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
@import url('/src/assets/base.css');

.header {
  height: 100vh;
  max-width: 100vw;
  background: url('../assets/img/HeaderBg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
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
  font-size: 24px;
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
  margin-top: 160px;
  display: flex;
  width: 485px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}

.header-content-title {
  font-family: 'ReformaGrotesk';
  font-weight: 700;
  color: #db3138;
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

.header-info-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto new lines */
  width: 100%;
}
.delim {
  margin-top: 20px;
}
</style>
