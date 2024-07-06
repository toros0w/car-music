<template>
  <div class="container">
    <div class="items-con">
      <MxAchievementsTexts />
      <div class="items-group">
        <MxAchievementsItems
          class="items-first"
          v-for="(item, index) in itemsFirst"
          :key="index"
          :hash="item.hash"
          :title="item.title"
          :text="item.text"
          :imgSrc="item.imgSrc"
          :cls="cls"
        />
      </div>
      <div class="items-group">
        <MxAchievementsItems
          class="items-second"
          v-for="(item, index) in itemsSecond"
          :key="index"
          :hash="item.hash"
          :title="item.title"
          :text="item.text"
          :imgSrc="item.imgSrc"
          :cls="cls"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MxAchievementsTexts from '@/mixins/MxAchievementsTexts.vue'
import MxAchievementsItems from '@/mixins/MxAchievementsItems.vue'
export default {
  name: 'AchievementsLayout',
  components: {
    MxAchievementsTexts,
    MxAchievementsItems
  },
  data() {
    return {
      itemsFirst: [
        {
          hash: '#',
          title: '1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          hash: '#',
          title: '6',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          hash: '#',
          title: '2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          hash: '#',
          title: '1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        }
      ],
      itemsSecond: [
        {
          hash: '#',
          title: '1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          hash: '#',
          title: '6',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          hash: '#',
          title: '2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        },
        {
          imgSrc: '/src/assets/img/cup-ach.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}

.items-con {
  display: flex; /* Устанавливаем flex-контейнер для размещения всех элементов в ряд */
  justify-content: right; /* Равномерное распределение элементов по горизонтали */
}

.items-group {
  display: flex; /* flex-контейнер для группы элементов */
  flex-direction: column; /* Размещение элементов группы вертикально */
}

.items-first {
}

.items-second:first-child {
  margin-top: 40px;
}
</style>
