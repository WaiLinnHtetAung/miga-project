<template>
    <div class="activity-section">
        <div class="section-header mt-5">
            <h2>Our Activities</h2>
        </div>
        <div class="container pb-5">
            <div class="activity">

                <div class="title">
                    <h2>Presentation Time</h2>
                </div>
        
                <div class="photo">
                    <div id="carousel1" class="carousel slide"  data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active w-100">
                                <img src="@/assets/images/miga/miga23.jpg"  alt="">
                            </div>
                            <div class="carousel-item w-100">
                                <img src="@/assets/images/miga/miga24.jpg" alt="">
                            </div>
                            <div class="carousel-item w-100">
                                <img src="@/assets/images/miga/miga25.jpg" alt="">
                            </div>
                            <div class="carousel-item w-100">
                                <img src="@/assets/images/miga/miga26.jpg" alt="">
                            </div>
                            <div class="carousel-item w-100">
                                <img src="@/assets/images/miga/miga27.jpg" alt="">
                            </div>
                            <div class="carousel-item w-100">
                                <img src="@/assets/images/miga/miga18.jpg" alt="">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <Roleplay />
            <Fieldtrip></Fieldtrip>
            <Sharing></Sharing>
            <FunTime></FunTime>
        </div>
    </div>
</template>

<script>
import FunTime from '../components/activity/FunTime'
import Sharing from '../components/activity/Sharing'
import Fieldtrip from '../components/activity/Fieldtrip'
import Presentation from '../components/activity/Presentation'
import Roleplay from '../components/activity/Roleplay'
import { onMounted } from 'vue'
    export default {
  components: {
    FunTime,
    Sharing,
    Fieldtrip,
    Presentation, Roleplay },
        setup() {
            onMounted(() => {
                window.scrollTo(0,0);
                const myCarousel1 = new bootstrap.Carousel(document.querySelector('#carousel1'));
            })
        }
    }
</script>

<style>
    .activity-section {
        padding: 10px 15% 30px;
    }

    .activity-section .section-header h2 {
        background: goldenrod;
        padding: 10px 20px;
    }

    .activity-section .activity {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 150px;
    }

    .activity-section .activity.odd {
        flex-direction: row-reverse;
    }

    .activity-section .activity .title {
        width: 30%;
    }

    .activity-section .activity.odd .title {
        text-align: center;
    }

    .activity-section .activity .title h2 {
        font-weight: bold;
        color: rgb(168, 127, 21);
        font-size: 40px;
    }

    .activity-section .activity .photo {
        width: 60%;
    }

    .activity-section .carousel-inner  {
        border-radius: 30px;
    }

    .activity-section .activity .photo img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 30px;
    }

    .activity-section .carousel-indicators button {
        width: 7px !important;
        height: 7px !important;
        border-radius: 100%;
    }

    @media (max-width: 1600px) {
        .activity-section {
            padding: 0px 9% 30px;
        }
    
        .activity-section .section-header h2 {
            padding: 10px 20px;
        }
    
        .activity-section .activity {
            margin-top: 150px;
        }
    
        .activity-section .activity .title {
            width: 30%;
        }
    
        .activity-section .activity .title h2 {
            font-size: 35px;
        }
    
        .activity-section .activity .photo {
            width: 55%;
        }
    
        .activity-section .activity .photo img {
            width: 100%;
            height: 300px;
        }
    }

    @media (max-width: 990px) {
        .activity-section {
            padding: 0px 3% 30px;
        }
    
        .activity-section .activity {
            margin: 100px auto 20px;
            flex-direction: column;
        }
    
        .activity-section .activity .title {
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }
    
        .activity-section .activity .title h2 {
            font-size: 35px;
        }

        .activity-section .activity.odd {
            flex-direction: column;
        }
    
        .activity-section .activity.odd .title {
            text-align: center;
        }
    
        .activity-section .activity .photo {
            width: 80%;
        }
    
        .activity-section .activity .photo img {
            width: 100%;
            height: 300px;
        }
    }

    @media (max-width: 850px) {
        .activity-section {
            padding: 40px 3% 30px;
        }
    }

    @media (max-width: 500px) {
        .activity-section .section-header h2 {
            font-size: 25px;
        }
        .activity-section .activity .title h2 {
            font-size: 30px;
        }

        .activity-section .activity .photo {
            width: 100%;
        }
    }
</style>
