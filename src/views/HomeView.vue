<template>
    <Carousel></Carousel>
    <SchoolInfo></SchoolInfo>
    <ExploreTopCourse></ExploreTopCourse>
    <SchoolHistory></SchoolHistory>
    <Slider></Slider>
    <Footer></Footer>
</template>

<script>
import SchoolInfo from '../components/SchoolInfo'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import SchoolHistory from '../components/SchoolHistory'
import ExploreTopCourse from '../components/ExploreTopCourse'
import Carousel from '../components/Carousel'

export default {
  name: 'HomeView',
  components: {
    SchoolInfo,
    Slider,
    Footer,
    SchoolHistory,
    ExploreTopCourse, Carousel },
  
}
</script>

<style scoped>
  p {
    margin-top: 130px;
  }
</style>