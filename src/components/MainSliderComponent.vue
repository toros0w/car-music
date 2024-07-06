<template>
  <div class="container">
    <div class="info">
      <SliderInfoComponent
        :itemLogo="'src/assets/img/main-slider-icon-1.svg'"
        :title="'материалы от лучших компаний'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium'"
        :itemDelim="'src/assets/img/MxDelimiter.svg'"
      /><SliderInfoComponent
        :itemLogo="'src/assets/img/main-slider-icon-2.svg'"
        :title="'Опытные мастера'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus'"
        :itemDelim="'src/assets/img/MxDelimiter.svg'"
      /><SliderInfoComponent
        :itemLogo="'src/assets/img/main-slider-icon-3.svg'"
        :title="'Гарантия на все виды работы'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.'"
      />
    </div>

    <SliderComponent />
  </div>
</template>

<script>
import SliderInfoComponent from '@/components/SliderInfoComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
export default {
  name: 'MainSliderComponent',
  components: {
    SliderInfoComponent,
    SliderComponent
  }
}
</script>

<style scoped>
.container:first-child {
  margin-top: 180px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
}
.info {
  margin-top: 60px;
}
.main-custom-prev,
.main-custom-next {
  z-index: 10;
  width: 44px;
  height: 44px;
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
}
</style>