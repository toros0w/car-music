<template>
  <div class="container">
    <h1 class="achievements-title">
      наши достижения от кубка <br />
      россии до чемпионатов мира
    </h1>
    <MxDelimiter class="delim" />
    <p class="achievements-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt
      pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus.
      Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique
      sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.
    </p>
  </div>
</template>

<script>
import MxDelimiter from './MxDelimiter.vue'
export default {
  name: 'MxAchievementsTexts',
  components: {
    MxDelimiter
  }
}
</script>

<style scoped>
.container {
  max-width: 650px;
  text-align: left;
}
.achievements-title {
  color: white;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 52px;
  text-transform: uppercase;
  max-width: 640px;
  line-height: 73px;
  letter-spacing: 0.5px;
}

.delim {
  text-align: left;
  margin-top: 40px;
}
.achievements-text {
  color: white;
  font-family: 'ReformaGrotesk';
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 29px;
  letter-spacing: 0.3px;
  max-width: 596px;
  margin-top: 61px;
  padding-bottom: 548px;
}
</style>