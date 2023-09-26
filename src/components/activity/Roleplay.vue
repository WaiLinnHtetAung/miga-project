<template>
    <div class="activity odd">

        <div class="title">
            <h2>Roleplay Session</h2>
        </div>

        <div class="photo">
            <div class="carousel-container">
                <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active w-100">
                            <img src="@/assets/images/miga/miga28.jpg" alt="">
                        </div>
                        <div class="carousel-item w-100">
                            <img src="@/assets/images/miga/miga29.jpg" alt="">
                        </div>
                        <div class="carousel-item w-100">
                            <img src="@/assets/images/miga/miga30.jpg" alt="">
                        </div>
                        <div class="carousel-item w-100">
                            <img src="@/assets/images/miga/miga31.jpg" alt="">
                        </div>
                        <div class="carousel-item w-100">
                            <img src="@/assets/images/miga/miga32.jpg" alt="">
                        </div>
                        <div class="carousel-item w-100">
                            <img src="@/assets/images/miga/miga3.jpg" alt="">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
            })
        }
    }
</script>

