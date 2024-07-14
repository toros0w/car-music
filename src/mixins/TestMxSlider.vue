<template>
  <div class="parent-container">
    <div class="slider-container">
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
              <img src="/src/assets/img/3-slider-1.jpeg" alt="" width="636px" height="550px" />
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
    <div class="info">
      <SliderInfoComponent
        :itemLogo="'src/assets/img/services-logo-1.svg'"
        :title="'100% полироль axem'"
        :text="'Pharetra in bibendum id id. Sit maecenas sollicitudin est, hendrerit in malesuada. Eu, et lacus nisi mus sagittis, rhoncus est dictum. Gravida lectus urna, arcu, sodales. Ac.'"
        :itemDelim="'src/assets/img/MxDelimiter.svg'"
      />
      <SliderInfoComponent
        :itemLogo="'src/assets/img/main-slider-icon-1.svg'"
        :title="'выполняем работу четко по тз'"
        :text="'Lorem nulla non nibh quis elit odio. Dui et ultricies duis mattis dictum et senectus nunc sodales. Tellus lorem risus etiam quam massa lobortis convallis laoreet. Nec.'"
        :itemDelim="'src/assets/img/MxDelimiter.svg'"
      />
      <SliderInfoComponent
        :itemLogo="'src/assets/img/services-logo-3.svg'"
        :title="'у нас лучшие мастера'"
        :text="'Posuere nam sodales ullamcorper bibendum justo maecenas at. Ultricies bibendum morbi tempor vehicula. Ultrices erat maecenas in id maecenas sed ipsum scelerisque. '"
      />
    </div>
  </div>
</template>

<script>
import SliderInfoComponent from '@/components/SliderInfoComponent.vue'
import { ref, onMounted } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderInfoComponent
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
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 180px;
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 636px;
}

.swiper-container {
  width: 636px;
}

.controllers-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.main-slider-info {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  text-align: center;
  flex-grow: 1;
  margin: 0 15px;
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

.info {
  max-width: 600px;
  color: wheat;
  padding-left: 30px;
}
.slide-content img {
  object-fit: cover;
}
</style>
