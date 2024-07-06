<template>
  <div class="container">
    <div class="slider-main-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="1"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          ><div class="slide-content">
            <img src="/src/assets/img/MainSlide-1.jpg" alt="" width="100px" height="100px" /></div
        ></swiper-slide>
        <swiper-slide
          ><div class="slide-content">
            <img src="/src/assets/img/MainSlide-2.jpg" alt="" width="100px" height="100px" /></div
        ></swiper-slide>
        <swiper-slide
          ><div class="slide-content">
            <img src="/src/assets/img/MainSlide-3.jpg" alt="" width="100px" height="100px" /></div
        ></swiper-slide>
        <swiper-slide
          ><div class="slide-content">
            <img src="/src/assets/img/MainSlide-1.jpg" alt="" width="100px" height="100px" /></div
        ></swiper-slide>
        <swiper-slide
          ><div class="slide-content">
            <img src="/src/assets/img/MainSlide-2.jpg" alt="" width="100px" height="100px" /></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'MxSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
}
.slider-main-wrapper {
}
</style>
