<template>
  <div>
    <MainHeaderLayout />
    <AchievementsLayout />
    <RowSliderComponent />
    <MainSliderComponent />
    <ServicesComponent />
    <MxSlider />
  </div>
</template>

<script>
import MainHeaderLayout from '@/layouts/MainHeaderLayout.vue'
import AchievementsLayout from '@/layouts/AchievementsLayout.vue'
import RowSliderComponent from '@/components/RowSliderComponent.vue'
import MainSliderComponent from '@/components/MainSliderComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import MxSlider from '@/mixins/MxSlider.vue'
export default {
  name: 'MainSection',
  components: {
    MainHeaderLayout,
    AchievementsLayout,
    RowSliderComponent,
    MainSliderComponent,
    ServicesComponent,
    MxSlider
  }
}
</script>