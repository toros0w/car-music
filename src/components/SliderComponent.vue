<template>
  <div class="parent-container">
    <div class="container">
      <div class="swiper-container">
        <swiper
          ref="swiperRef"
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :navigation="{
            nextEl: '.main-swiper-button-next',
            prevEl: '.main-swiper-button-prev'
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="swiper-container"
        >
          <swiper-slide>
            <div class="slide-content">
              <img src="/src/assets/img/MainSlide-1.jpg" alt="" width="636px" height="550px" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <img src="/src/assets/img/MainSlide-2.jpg" alt="" width="636px" height="550px" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <img src="/src/assets/img/MainSlide-3.jpg" alt="" width="636px" height="550px" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="controllers-container">
        <button class="main-custom-prev main-swiper-button-prev" @click="prev">
          <img src="/src/assets/img/left.svg" alt="Prev" />
        </button>
        <p class="main-slider-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat
          est. Consectetur lectus.
        </p>
        <button class="main-custom-next main-swiper-button-next" @click="next">
          <img src="/src/assets/img/right.svg" alt="Next" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const swiperRef = ref(null)

    const onSwiper = (swiper) => {
      console.log(swiper)
    }

    const onSlideChange = () => {
      console.log('slide change')
    }

    const prev = () => {
      const swiperInstance = swiperRef.value.swiper
      if (swiperInstance) {
        swiperInstance.slidePrev()
      }
    }

    const next = () => {
      const swiperInstance = swiperRef.value.swiper
      if (swiperInstance) {
        swiperInstance.slideNext()
      }
    }

    onMounted(() => {
      if (swiperRef.value) {
        console.log('Swiper initialized:', swiperRef.value)
      }
    })

    return {
      swiperRef,
      onSwiper,
      onSlideChange,
      prev,
      next,
      modules: [Navigation]
    }
  }
}
</script>

<style scoped>
.parent-container {
  width: 1300px;
  overflow: hidden;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: wheat;
  margin-top: 180px;
  max-width: 636px; /* Обновлено для соответствия ширине слайда */
}
.container:last-child {
  padding-left: 100px;
}
.swiper-container {
  width: 636px; /* Убедитесь, что ширина слайдера равна ширине изображений */
}

.controllers-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
}
.main-slider-info {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  text-align: center;
  flex: 1;
}
.main-custom-prev,
.main-custom-next {
  background: none;
  border: none;
  cursor: pointer;
}
.main-custom-prev img,
.main-custom-next img {
  display: block;
}
.slide-content {
  text-align: center;
}
</style>
