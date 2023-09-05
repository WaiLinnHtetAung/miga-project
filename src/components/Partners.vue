<template>
    <div class="partners">
        <div class="header">
            <h2>OUR PARTNERS</h2>
        </div>
        <div class="partner-content">
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
                    '350': {
                        slidesPerView:2,
                        slidesPerGroup:1,
                    },
                    '500': {
                        slidesPerView:3,
                        slidesPerGroup:1,
                    },
                    '990': {
                        slidesPerView:5,
                        slidesPerGroup:1,
                    },
                }"
                :modules="modules"
                class="mySwiper"
                id="my-swiper"
                >
                <swiper-slide v-for="i in 4" :key="i" class="swiper-slide">
                    <div class="img-card">
                        <img :src="require(`@/assets/images/partners/${i}.jpg`)" alt="">
                    </div>
                </swiper-slide>
            </swiper>
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
            return {modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        },
    }
</script>

<style scoped>
    .partners {
        padding: 40px 15%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .partners .header {
        text-align: center;
    }

    .partners .header h2 {
        font-weight: bold;
        font-size: 33px;
    }

    .partners .partner-content {
        margin: 50px 0;
    }

    .partners .swiper-slide .img-card {
        text-align: center;
    }

    .partners .swiper-slide img {
        width: 70%;
    }

    @media (max-width: 1500px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 30px;
        }

        .partners .header h2 {
            font-size: 30px;
        }
    }

    @media (max-width: 1200px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 0px;
        }
    
        .partners .header h2 {
            font-size: 28px;
        }
    
        .partners .partner-content {
            margin: 50px 0 30px;
        }
    
        .partners .swiper-slide img {
            width: 70%;
            border-radius: 100%;
        }
    }

    @media (max-width: 990px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 0px;
        }
    
        .partners .header h2 {
            font-size: 24px;
        }
    
    }
</style>
