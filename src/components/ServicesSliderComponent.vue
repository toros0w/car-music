<template>
  <div class="container">
    <div class="info">
      <ServicesInfoComponent />
    </div>
    <SliderComponent :slides="slides1" swiperId="slider1" position="left" />
  </div>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue'
import ServicesInfoComponent from '@/components/ServicesInfoComponent.vue'
export default {
  name: 'ServicesSliderComponent',
  components: {
    ServicesInfoComponent,
    SliderComponent
  },
  data() {
    return {
      slides1: [
        {
          img: '/src/assets/img/MainSlide-1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.'
        },
        {
          img: '/src/assets/img/MainSlide-2.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.'
        },
        {
          img: '/src/assets/img/MainSlide-3.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 1300px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
/* .info {
  display: flex;
  flex-direction: column;
} */
</style>