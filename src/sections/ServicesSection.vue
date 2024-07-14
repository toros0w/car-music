<template>
  <div>
    <MainHeaderLayout
      :title="title"
      :text="text"
      :customStyle="styles"
      :btnText="btnText"
      :btnStyle="btnStyles"
    />
    <ServicesSliderComponent />
    <AdvantagesComponent />
    <ServicePricesComponent />
    <OurJobsLayout />
    <AnswerLayout />
    <FooterComponent />
  </div>
</template>

<script>
import MainHeaderLayout from '@/layouts/MainHeaderLayout.vue'
import ServicesSliderComponent from '@/components/ServicesSliderComponent.vue'
import AdvantagesComponent from '@/components/AdvantagesComponent.vue'
import ServicePricesComponent from '@/components/ServicePricesComponent.vue'
import OurJobsLayout from '@/layouts/OurJobsLayout.vue'
import AnswerLayout from '@/layouts/AnswerLayout.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'ServicesSection',
  components: {
    MainHeaderLayout,
    ServicesSliderComponent,
    AdvantagesComponent,
    ServicePricesComponent,
    OurJobsLayout,
    AnswerLayout,
    FooterComponent
  },
  data() {
    return {
      title: 'Оклейка автомобиля защитными пленками',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.',
      styles: {
        'font-size': '64px',
        'line-height': '80px',
        'text-align': 'center',
        'min-width': '636px'
      },
      btnText: 'ЦЕНЫ',
      btnStyles: {
        'font-size': '24px',
        width: '82px'
      }
    }
  }
}
</script>
