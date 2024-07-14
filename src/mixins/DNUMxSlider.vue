<template>
  <div class="slider-container" @mousedown="onMouseDown">
    <div
      class="slider"
      ref="slider"
      :style="{ transform: `translateX(${translateX}px)`, transition: transitionStyle }"
    >
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" @error="onImageError" class="slider-image" />
      </div>
    </div>
    <div class="controls">
      <div class="button" @click="prevSlide">
        <img src="/src/assets/img/left.svg" alt="Previous" />
      </div>
      <p>Текст</p>
      <div class="button" @click="nextSlide">
        <img src="/src/assets/img/right.svg" alt="Next" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSlider',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      errorImage: '/src/assets/img/img-not-found.jpg',
      isDragging: false,
      startDragX: 0,
      translateX: 0,
      transitionStyle: 'transform 0.5s ease-in-out',
      slideWidth: 636,
      dragThreshold: 50
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || this.errorImage
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
      this.updateTranslateX()
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.updateTranslateX()
    },
    onImageError(event) {
      event.target.src = this.errorImage
    },
    handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        this.prevSlide()
      } else if (event.key === 'ArrowRight') {
        this.nextSlide()
      }
    },
    onMouseDown(event) {
      this.isDragging = true
      this.startDragX = event.clientX
      this.transitionStyle = 'none'
      window.addEventListener('mousemove', this.onMouseMove)
      window.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(event) {
      if (this.isDragging) {
        const dragAmount = event.clientX - this.startDragX
        this.translateX = -this.currentIndex * this.slideWidth + dragAmount
      }
    },
    onMouseUp(event) {
      if (!this.isDragging) return

      this.isDragging = false
      const dragAmount = event.clientX - this.startDragX
      if (dragAmount > this.dragThreshold) {
        this.prevSlide()
      } else if (dragAmount < -this.dragThreshold) {
        this.nextSlide()
      } else {
        this.updateTranslateX()
      }
      this.transitionStyle = 'transform 0.5s ease-in-out'
      window.removeEventListener('mousemove', this.onMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)
    },
    updateTranslateX() {
      this.translateX = -this.currentIndex * this.slideWidth
    }
  },
  mounted() {
    this.updateTranslateX()
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
}
</script>

<style scoped>
.slider-container {
  width: 636px;
  height: 663px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.slider {
  display: flex;
  width: 100%;
  height: 550px;
}
.slide {
  min-width: 636px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 636px;
  margin-top: 20px;
}
.button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
p {
  color: white;
  font-size: 18px;
  margin: 0;
}
</style>
