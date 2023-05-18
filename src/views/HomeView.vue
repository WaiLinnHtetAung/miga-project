<template>
    <Carousel></Carousel>
    <SchoolInfo></SchoolInfo>
    <ExploreTopCourse></ExploreTopCourse>
    <SchoolHistory></SchoolHistory>
    <Slider></Slider>
    <ImageShow></ImageShow>
    <OurCampus></OurCampus>
    <LatestNews></LatestNews>
    
</template>

<script>
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
    OurCampus,
    LatestNews,
    ImageShow,
    SchoolInfo,
    Slider,
    Footer,
    SchoolHistory,
    ExploreTopCourse, Carousel },

    setup() {
      onMounted(() => {
        window.scrollTo(0,0)
      })
    }
  
}
</script>

<style scoped>
  p {
    margin-top: 130px;
  }
</style>