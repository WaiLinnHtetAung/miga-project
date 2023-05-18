<template>
    <div>
        <div class="ourservice-img">
            <img src="../assets/images/ourservice.jpg" alt="">
            <div class="service-header text-center">
                <p class="m-0 p-0">RIHEA</p>
                <h4 class="my-2 p-0">OUR SERVICES</h4>
            </div>
        </div>
        <div class="section-header mt-5 text-center">
            <h2>OUR SERVICES</h2>
            <p class="mt-3">One-stop solution service for your study-abroad dream</p>
        </div>
        <div class="services container mt-5 pb-5">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('pre-ged')">
                    <div class="text-center">
                        <img src="../assets/images/usa-flag.svg.png" alt="">
                        <button class="btn my-4">Service 01</button>
                        <h4 class="my-3">PRE GED (ONLINE, CAMPUS)</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('ged')">
                    <div class="text-center">
                        <img src="../assets/images/usa-flag.svg.png" alt="">
                        <button class="btn my-4">Service 02</button>
                        <h4 class="my-3">GED (ONLINE, CAMPUS)</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('pre-igcse')">
                    <div class="text-center">
                        <img src="../assets/images/uk-flag.svg.png" alt="">
                        <button class="btn my-4">Service 03</button>
                        <h4 class="my-3">PRE IGCSE (ONLINE, CAMPUS)</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('o-igcse')">
                    <div class="text-center">
                        <img src="../assets/images/uk-flag.svg.png" alt="">
                        <button class="btn my-4">Service 04</button>
                        <h4 class="my-3">O LEVEL IGCSE (ONLINE, CAMPUS)</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('eng-4-skills')">
                    <div class="text-center">
                        <img src="../assets/images/eng-skills.svg" alt="">
                        <button class="btn my-4">Service 05</button>
                        <h4 class="my-3">ACADEMIC ENGLISH 4 SKILLS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/counselling.png" alt="">
                        <button class="btn my-4">Service 06</button>
                        <h4 class="my-3">ADMISSION COUNSELING</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/visa.png" alt="">
                        <button class="btn my-4">Service 07</button>
                        <h4 class="my-3">VISA ASSISTANCE</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/notary.png" alt="">
                        <button class="btn my-4">Service 07</button>
                        <h4 class="my-3">NOTARY SERVICES</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/scholarship.png" alt="">
                        <button class="btn my-4">Service 08</button>
                        <h4 class="my-3">SCHOLARSHIP APPLICATION ASSESSMENT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();
            let goService = (name) => router.push(`/course-detail/${name}`);

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {goService}
        }
    }
</script>

<style scoped>
    .ourservice-img {
        width: 100%;
        height: 75vh;
        position: relative;
        padding-bottom: 30px;
    }
    .ourservice-img img {
        width: 100%;
        height: 100%;
        filter: brightness(.8);
    }
    .service-header {
        position: absolute;
        top: 70%;
        left: 20%;
        transform: translate(-50%, -50%);
    }
    .service-header  p, .service-header  h4 {
        color: #fff;
        font-weight: bold;
    }
    .service-header  h4 {
        font-size: 2rem;
        background-color: #23085a;
        padding: 5px 30px !important;
    }
    .services img {
        width: 80%;
        height: 168px;
    }
    .services h4 {
        font-size: 18px;
        font-weight: bold;
    }
    .services p {
        font-size: 14px;
    }
    .services button {
        padding: 5px 40px;
        border-radius: 20px;
    }
    .service-card {
        margin-bottom: 70px;
    }
</style>
