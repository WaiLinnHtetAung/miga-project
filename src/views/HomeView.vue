<template>
    <Nav></Nav>
    <Carousel></Carousel>
    <ExploreTopCourse></ExploreTopCourse>
    <SchoolHistory></SchoolHistory>
    <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer'
import SchoolHistory from '../components/SchoolHistory'
import ExploreTopCourse from '../components/ExploreTopCourse'
import Carousel from '../components/Carousel'
import Nav from './Nav'

export default {
  name: 'HomeView',
  components: {
    Footer,
    SchoolHistory,
    ExploreTopCourse, Carousel, Nav },
  
}
</script>

<style scoped>
  p {
    margin-top: 130px;
  }
</style>