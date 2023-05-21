<template>
  <div class="home-page">
    <Carousel></Carousel>
    <SchoolInfo></SchoolInfo>
    <ExploreTopCourse></ExploreTopCourse>
    <WhatIsGED></WhatIsGED>
    <SchoolHistory></SchoolHistory>
    <Slider></Slider>
    <ImageShow></ImageShow>
    <OurCampus></OurCampus>
    <LatestNews></LatestNews>
  </div>
    
</template>

<script>
import WhatIsGED from '../components/WhatIsGED'
import OurCampus from '../components/OurCampus'
import LatestNews from '../components/LatestNews'
import ImageShow from '../components/ImageShow'
import SchoolInfo from '../components/SchoolInfo'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import SchoolHistory from '../components/SchoolHistory'
import ExploreTopCourse from '../components/ExploreTopCourse'
import Carousel from '../components/Carousel'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',
  components: {
    WhatIsGED,
    OurCampus,
    LatestNews,
    ImageShow,
    SchoolInfo,
    Slider,
    Footer,
    SchoolHistory,
    ExploreTopCourse, Carousel },

  
}
</script>

<style scoped>
  .home-page {
    overflow-x: hidden;
  }
  p {
    margin-top: 130px;
  }
  
</style>