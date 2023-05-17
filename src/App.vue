<template>
  <Nav />
  <ChatBot />
  <router-view/>
  <Footer></Footer>
</template>

<script>
  import Nav from './views/Nav.vue'
  import ChatBot from './components/ChatBot.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {Nav, ChatBot, Footer}
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
  background: #eee;
}


.section-header h2{
    text-align: center;
    font-size: 1.8rem;
    color: #23085a;
    font-weight: bolder;
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
