<template>
    <div class="whatGed">
        <div data-aos="fade-right" class="ged-card">
            <div class="ged" >
                <h2 style="color:var(--main-text-color);">{{ blogs[0] ? blogs[0].title : '' }}</h2>
                <p class="text-white my-4">GED ဆိုတာ ဘာလဲ၊ GED ပြီးရင် ဘာတွေဆက်တက်လို့ ရမလဲ။ ဘာတွေ ပြင်ဆင်ရမလဲ</p>
                <button class="btn" @click="goGED">Read More</button>
            </div>
            <div class="cross-line"></div>
            <div data-aos="fade-down" data-aos-delay="400" class="img-container">
                <div class="img1">
                    <img src="../assets/images/ged.jpg" alt="">
                </div>
                <div class="img2">
                    <img src="../assets/images/miga/miga7.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    import getTopBlogs from '@/composables/getTopBlogs';
    export default {
        setup() {
            let router = useRouter();
            let {blogs, error, load} = getTopBlogs();
            load();

            let goGED = () => router.push('/blog-detail/1');

            return {blogs, goGED}
        }
    }
</script>

<style scoped>
    .whatGed {
        padding: 40px 9%;
        background: #fff;
    }

    .ged-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to right , #23085a, #a37e2f);
        height: 300px;
        padding: 0 50px 0 70px;
        position: relative;
    }
    .ged {
        width: 400px;
    }

    .ged button {
        background: #fff;
        color: #000;
        font-size: 12px;
    }
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .img1, .img2 {
        width: 230px;
        height: 250px;
    }
    .img1 img, .img2 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .cross-line {
        border-bottom: 3px solid var(--main-text-color);
        width: 30%;
        transform: rotate(-60deg);
        transform-origin: right;
        position: absolute;
        left: 15rem;
        bottom: 18.5rem;
    }

    @media (max-width:990px) {
        .ged-card {
            flex-direction: column;
            height: auto;
            padding: 50px 20px !important;
            gap: 3rem;
            width: 600px;
            margin: 0 auto;
            border-radius: 20px;
        }
        .ged {
            margin: 10px auto 0px;
        }

        .img-container {
            margin: 20px auto 0;
        }
        .cross-line {
            display: none;
        }
    }

    @media (max-width:450px) {
        .ged-card {
            flex-direction: column;
            height: auto;
            padding: 50px 20px !important;
            gap: 3rem;
            width: 300px;
            margin: 0 auto;
            border-radius: 20px;
        }
        .ged {
            width: 250px;
            margin: auto;
            text-align: center;
        }
        .img-container {
            flex-direction: column;
        }
    }
</style>
