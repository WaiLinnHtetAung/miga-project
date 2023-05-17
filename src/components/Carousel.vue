<template>
    <div class="carousel-container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active w-100">
                    <img src="../assets/images/slider2.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p>Learning Skills & Upgrade Your Life</p>
                        <h3 class="mb-5">WELCOME TO RIHEA</h3>
                        <button class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/slider1.jpeg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p>Learning Skills & Upgrade Your Life</p>
                        <h3 class="mb-5">WELCOME TO RIHEA</h3>
                        <button class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/carousel3.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p>Learning Skills & Upgrade Your Life</p>
                        <h3 class="mb-5">WELCOME TO RIHEA</h3>
                        <button class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();
            let goContact = () => router.push('/contact-us');

            return {goContact}
        }
    }
</script>

<style scoped>

    .carousel-item img {
        width: 100%;
        height: 550px;
        object-fit: cover;
        object-position: center;
        opacity: .8;
    }

    .carousel-item .carousel-caption {
        margin-bottom: 100px;
    }

    .carousel-caption h3 {
        color: #fff;
        font-weight: bolder;
        font-size: 2.5rem;
    }

    .carousel-caption p {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--main-text-color);
    }
</style>
