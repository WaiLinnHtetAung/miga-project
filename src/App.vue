<template>
  <Nav />
  <ChatBot />
  <router-view/>
</template>

<script>
  import Nav from './views/Nav.vue'
  import ChatBot from './components/ChatBot.vue'

  export default {
    components: {Nav, ChatBot}
  }
</script>

<style>
:root {
  --main-text-color : rgb(238,185,36);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  position: relative;
  background-image: linear-gradient(to right top, #02084b, #1a1457, #2b2064, #3b2d70, #4b3a7d) !important;
}

.main-bg {
    background-image: linear-gradient(to right top, #02084b, #1a1457, #2b2064, #3b2d70, #4b3a7d);
}

.sec-bg {
    background-image: linear-gradient(to left, #02084b, #251d67, #413383, #5d4aa1, #7a62c0);
}

.section-header h2{
    text-align: center;
    color: var(--main-text-color);
  }

  .btn {
    background: var(--main-text-color);
    color: #1d203e;
    border-radius: 6px;
  }

  .pointer {
    cursor: pointer;
  }

  .card-wrapper #my-swiper .swiper-button-next::after, .card-wrapper #my-swiper .swiper-button-prev::after{
    font-size: 30px !important;
    margin-bottom: 1.5rem;
    color: var(--main-text-color);
  }

  span {
    color: var(--main-text-color);
  }

</style>
