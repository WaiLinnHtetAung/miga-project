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
    text-transform: uppercase;
  }

  .btn {
    background: #23085a;
    color: var(--main-text-color);
    border-radius: 6px;
    font-weight: bold;
    transition: .5s ease;
  }
  .btn:hover {
    color: var(--main-text-color);
    box-shadow: 0 0 1.4rem var(--main-text-color);
    transform: scale(1.03);
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
