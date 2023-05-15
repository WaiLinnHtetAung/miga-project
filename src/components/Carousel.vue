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
                    <img src="../assets/images/carousel1.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>Let's Started</h3>
                        <p>Learning Skills & Upgrade Your Life</p>
                        <button class="btn">Explpore</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/carousel2.webp" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>Let's Started</h3>
                        <p>Learning Skills & Upgrade Your Life</p>
                        <button class="btn">Explpore</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/carousel3.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>Let's Started</h3>
                        <p>Learning Skills & Upgrade Your Life</p>
                        <button class="btn">Explpore</button>
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
    export default {
        
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
        margin-bottom: 150px;
    }

    
</style>
