<template>
    <div class="slider">
        <div data-aos="zoom-in" class="section-header">
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
                                <div class="card-head">
                                    <img :src="data.img" alt="">
                                    <div class="card-content">
                                        <p class="">{{data.description}}</p>
                                        <h4 class="">{{data.name}}</h4>
                                        <p class="collage">({{data.collage}})</p>
                                        <p style="font-size: 14px;">RIHEA Alumni</p>
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
            const datas = ref([
                {
                    description: "I prefer teaching methods that keep me engaged and actively participating in the learning process. Lectures and traditional teaching methods can be monotonous and boring, so I appreciate activities that allow me to interact with the material and my peers.",
                    img: require( "../assets/images/miga/miga11.jpg"),
                    name: 'Mr. Htun Aung Latt',
                    collage: 'Master of Engineering - Edinburgh University'
                },
                {
                    description: "I appreciate feedback from my teachers about my progress and areas for improvement. Constructive criticism and specific guidance can help me improve my performance and build my confidence.",
                    img: require('../assets/images/miga/miga12.jpg'),
                    name: 'Mr. Myint Myat Hein',
                    collage: 'Master of Engineering - Edinburgh University'
                },
                {
                    description: "I appreciate the supportive and inclisive environment offered by the school. The admission team has a strong sense of community and provide students with individualized attention and support to help us succeed.",
                    img: require('../assets/images/miga/miga13.jpg'),
                    name: 'Mr. Swan Pyae Hein',

                },
                {
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatum cumque id aliquid sit modi dicta nihil expedita alias animi.",
                    img: require('../assets/images/miga/miga14.jpg'),
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
        background-image: linear-gradient(to right,rgba(206, 206, 40, 0.5), rgba(0, 0, 255, 0.5));
        height: 100vh;
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
        height: 450px
    }
    .card-head img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        object-fit: cover;
    }

    .card-content {
        padding: 12px 20px;
        text-align: center;
        margin-top: 20px;

    }

    .card-content p {
        color: #fff !important;
        font-size: 12px;
    }


    .card-content h4 {
        font-size: 16px;
        color: #23085a !important;
        margin-bottom: 1rem;
    }

    .swiper {
        padding-bottom: 50px;
    }

    @media (max-width:850px) {
        .section-header {
            font-size: 1.5rem;
        }
        .slider{
            height: auto;
        }
    }
    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.2rem;
        }
        .slide-content {
            width: 100%;
            margin: 0 auto;
        }
    }

</style>
