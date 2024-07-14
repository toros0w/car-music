<template>
  <div>
    <MainHeaderLayout
      :title="title"
      :text="text"
      :customStyle="styles"
      :btnText="btnText"
      :btnStyle="btnStyles"
    />
    <AchievementsLayout />
    <RowSliderComponent />
    <MainSliderComponent />
    <ServicesComponent />
    <TestMxSlider />
    <OurJobsLayout />
    <AnswerLayout />
    <FooterComponent />
  </div>
</template>

<script>
import MainHeaderLayout from '@/layouts/MainHeaderLayout.vue'
import AchievementsLayout from '@/layouts/AchievementsLayout.vue'
import RowSliderComponent from '@/components/RowSliderComponent.vue'
import MainSliderComponent from '@/components/MainSliderComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import TestMxSlider from '@/mixins/TestMxSlider.vue'
import OurJobsLayout from '@/layouts/OurJobsLayout.vue'
import AnswerLayout from '@/layouts/AnswerLayout.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'MainSection',
  components: {
    MainHeaderLayout,
    AchievementsLayout,
    RowSliderComponent,
    MainSliderComponent,
    ServicesComponent,
    TestMxSlider,
    OurJobsLayout,
    AnswerLayout,
    FooterComponent
  },
  data() {
    return {
      imagesSet1: [
        '/src/assets/img/MainSlide-1.jpg',
        '/src/assets/img/MainSlide-2.jpg',
        '/src/assets/img/MainSlide-3.jpg'
      ],
      title: 'CAR MUSC',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.',
      styles: {
        'font-size': '150px',
        'line-height': '188px',
        'text-align': 'center',
        'min-width': '800px'
      },
      btnText: 'НАШИ УСЛУГИ',
      btnStyles: {
        'font-size': '24px'
      }
    }
  }
}
</script>