<template>
  <div class="container">
    <swiper
      ref="swiperRef"
      :modules="modules"
      :slides-per-view="3"
      :space-between="1"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="swiper-container"
    >
      <swiper-slide>
        <div class="slide-content">
          <img src="/src/assets/img/slide-1.jpg" alt="" width="416px" height="350px" />
          <MxRowSlideBtn
            :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.'"
            class="slide-btn"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <img src="/src/assets/img/slide-2.jpg" alt="" width="416px" height="350px" />
          <MxRowSlideBtn
            :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit '"
            class="slide-btn"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <img src="/src/assets/img/slide-3.jpg" alt="" width="416px" height="350px" />
          <MxRowSlideBtn
            :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante'"
            class="slide-btn"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <img src="/src/assets/img/slide-1.jpg" alt="" width="416px" height="350px" />
          <MxRowSlideBtn
            :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante'"
            class="slide-btn"
          />
        </div>
      </swiper-slide>
    </swiper>
    <button class="custom-prev" @click="prev">
      <img src="/src/assets/img/left.svg" alt="" />
    </button>
    <button class="custom-next" @click="next">
      <img src="/src/assets/img/right.svg" alt="" />
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import MxRowSlideBtn from '@/mixins/MxRowSlideBtn.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    MxRowSlideBtn
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
      const prevButton = document.querySelector('.swiper-button-prev')
      if (prevButton) {
        prevButton.click()
      }
    }

    const next = () => {
      const nextButton = document.querySelector('.swiper-button-next')
      if (nextButton) {
        nextButton.click()
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

<style>
.container {
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
}
.swiper-container {
  width: 1300px;
  margin: 0 auto;
}

.swiper-button-prev,
.swiper-button-next {
  display: none;
}

.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.custom-prev {
  left: -30px;
}

.custom-next {
  right: -30px;
}

.custom-prev img,
.custom-next img {
  display: block;
}

.slide-content {
  position: relative;
}

.slide-btn {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>
