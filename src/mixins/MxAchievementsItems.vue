<template>
  <div class="container">
    <div class="items">
      <img :src="imgSrc" alt="" class="item-icon" />
      <div class="title-items">
        <p class="hash">{{ hash }}</p>
        <h1 class="title">{{ title }}</h1>
      </div>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MxAchievementsItems',
  props: {
    hash: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    imgSrc: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  position: relative;
  max-width: 318px !important;
  min-height: 177px;
  border: 1px solid #898989;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.items {
  max-width: 277px;
  max-height: 117px;
  min-width: 277px;
  min-height: 117px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-items {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.hash {
  font-size: 24px;
  font-weight: 600;
  position: relative;
  align-self: flex-end;
  margin-bottom: calc((52px - 24px) / 2);
  color: #db3138;
}
.title {
  font-size: 52px;
  font-weight: 600;
  line-height: 73px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  color: #db3138;
}
.text {
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.5px;
  font-family: 'ReformaGrotesk';
  color: #fff;
}
.item-icon {
  width: 44px;
  height: 52px;
}
</style>
