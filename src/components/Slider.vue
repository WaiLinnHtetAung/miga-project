<template>
    <div class="slider main-bg">
        <div class="section-header">
            <h2>Voices from Our Students</h2>
        </div>
        <div class="d-flex justify-content-center align-items-cente">
            <div class="slide-container my-5 " >
                <div class="slide-content">
                    <div class="card-wrapper">
                        
                        <swiper
                            :slidesPerView="1"
                            :slidesPerGroupSkip="1"
                            :spaceBetween="30"
                            :centerSlide="true"
                            :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }"
                            :keyboard="{
                            enabled: true,
                            }"
                            :breakpoints="{
                                '450': {
                                slidesPerView:2,
                                slidesPerGroup:2,
                                },
                                '850': {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                            
                            }"
                            :navigation="true"
                            :pagination="{
                                clickable: true,
                                dynamicBullets:true,
                            }"
                            :modules="modules"
                            class="mySwiper"
                            id="my-swiper"
                            >
                            <swiper-slide v-for="(data, index) in datas" :key="index">
                                <div class="card-head shadow">
                                    <img :src="data.img" alt="">
                                    <div class="card-content">
                                        <p class="text-dark">{{data.description}}</p>
                                        <h4 class="text-dark">{{data.name}}</h4>
                                        <p  class="text-dark">RIHEA Alumni</p>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import { ref } from 'vue';
    export default {
        components: {Swiper,SwiperSlide,},

        setup() {
            const slider = ref(null);
            console.log(slider.value);
            const datas = ref([
                {
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatum cumque id aliquid sit modi dicta nihil expedita alias animi.",
                    img: require( "../assets/images/profile1.webp"),
                    name: 'Mr.Willian',
                },
                {
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatum cumque id aliquid sit modi dicta nihil expedita alias animi.",
                    img: require('../assets/images/profile2.jpeg'),
                    name: 'Mr.Willian',
                },
                {
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatum cumque id aliquid sit modi dicta nihil expedita alias animi.",
                    img: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
                    name: 'Mr.Willian',

                },
                {
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatum cumque id aliquid sit modi dicta nihil expedita alias animi.",
                    img: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
                    name: 'Mr.Willian',

                }
            ])

            return {modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay], datas}
        },
    }
</script>

<style scoped>
    .slider {
        padding: 50px 9% 0;
    }
    .slide-container {
        width: 100%;
        max-width: 1120px;
        padding: 20px 0;
    }
    .slide-content {
        margin: 0 50px;
        overflow: hidden;
    }

    .card-wrapper .card-head {
       margin-left: .4rem;
    }

    .card-head {
        border-radius: 12px;
        text-align: center;
        padding-top: 10px;
        height: 380px
    }
    .card-head img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .card-content {
        padding: 12px 20px;
        text-align: center;
        margin-top: 20px;

    }

    .card-content p {
        color: #fff !important;
        font-size: 14px;
    }

    .card-content h4 {
        font-size: 16px;
        color: rgb(238,185,36) !important;
        margin-bottom: 1rem;
    }

    .swiper {
        padding-bottom: 50px;
    }

 

</style>
