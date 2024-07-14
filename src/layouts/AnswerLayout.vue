<template>
  <div class="container">
    <div class="answer-title">ответим на любой вопрос</div>
    <img src="/src/assets/img/MxDelimiter.svg" alt="" class="delim" />
    <div class="inputs-wrapper">
      <div class="small-inputs">
        <input type="text" class="small-input" placeholder="ИМЯ" />
        <input type="text" class="small-input" placeholder="ТЕЛЕФОН" />
      </div>
      <div class="big-input">
        <textarea type="text" class="question" placeholder="ВОПРОС ПО ДИЗАЙНУ, ТЮНИНГУ И ДР." />
        <div class="social">
          <img src="/src/assets/img/tg-icon.svg" alt="" class="social-icon" />
          <img src="/src/assets/img/yt-icon.svg" alt="" class="social-icon" />
          <img src="/src/assets/img/vk-icon.svg" alt="" class="social-icon" />
        </div>
      </div>
      <div class="inputs-footer">
        <MxBtn
          :text="'Отправить'"
          :customStyle="{
            'font-size': '24px',
            height: '61px',
            'margin-right': '25px',
            'max-width': '119px'
          }"
        />
        <div class="inputs-info">
          <div class="adress">
            <img src="/src/assets/img/location.svg" alt="" class="adress-icon" />
            <div class="adress-content">Eu faucibus et rutrum fringilla orci nunc</div>
          </div>
          <div class="phone-email">
            <img src="/src/assets/img/phone-icon.svg" alt="" class="phone-icon" />
            <div class="phone-email-content">8 (812) 123-45-67</div>
            <img src="/src/assets/img/email-icon.svg" alt="" class="email-icon" />
            <div class="phone-email-content">test@test.ru</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MxBtn from '@/mixins/MxBtn.vue'
export default {
  name: 'AnswerLayout',
  components: {
    MxBtn
  }
}
</script>

<style scoped>
.container {
  width: 636px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 100px;
}
.answer-title {
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 52px;
  line-height: 73px;
  color: #fff;
  text-transform: uppercase;
}
.delim {
  margin-top: 40px;
  margin-bottom: 61px;
}
input {
  background: none;
  border: 1px solid #898989;
  transition: 0.2s ease-in-out;
  color: #fff;
}
textarea {
  background: none;
  border: 1px solid #898989;
  transition: 0.2s ease-in-out;
  color: #fff;
  padding: 15px 0 0 25px;
  box-sizing: border-box;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
}
.small-inputs {
  display: flex;
  justify-content: space-between;
}
.small-input {
  padding: 15px 25px;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  min-width: 256px;
}
input:focus {
  outline: 1px solid #db3138;
  border: none;
}
input:focus::placeholder {
  color: #fff;
}
.big-input {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
textarea:focus {
  outline: 1px solid #db3138;
  border: none;
}
textarea:focus::placeholder {
  color: #fff;
}
.question {
  min-width: 526px;
  min-height: 150px;
}

.social {
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
}
.inputs-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputs-info {
  display: flex;
  flex-direction: column;
}
.adress {
  display: flex;
}
.adress-content {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-transform: uppercase;
  margin-left: 10px;
}
.phone-email {
  display: flex;
  justify-content: end;
}
.phone-email-content {
  color: #fff;
  font-family: 'ReformaGrotesk';
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-transform: uppercase;
  margin-left: 10px;
}
.email-icon {
  margin-left: 10px;
}
</style>