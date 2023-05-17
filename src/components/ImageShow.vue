<template >
    <div style="padding-bottom: 30px;">
        <div class="section-header mt-5">
            <h2>Our Activities</h2>
        </div>
        <div class="images">
            <div class="img">
                <img src="../assets/images/miga/miga1.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga2.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga3.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga4.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga5.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga6.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga7.jpg" alt="">
            </div>
            <div class="img">
                <img src="../assets/images/miga/miga8.jpg" alt="">
            </div>
        </div>
        <div class="activities-btn" @click="stuActivities">
            <button >Students Activities </button>
            <i class="fa-solid fa-universal-access"></i>
        </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();

            let stuActivities = () => router.push('/students-activities');

            return {stuActivities}
        }

    }
</script>

<style scoped>
    .images {
        padding: 40px 3% 30px;
        display: flex;justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: .8rem;
        /* background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg2.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover; */
    }
    .img {
        overflow: hidden;
    }
    .img img {
        width: 300px;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    .img img:hover {
        transform: scale(1.1);
    }
    .activities-btn {
        width: 210px;
        display: flex ;
        background: #23085a;
        border-radius: 12px;
        transition: .5s ease;
        margin: 0 auto;
    }

    button {
        display: inline-block;
        color: rgb(238,185,36);
        padding: 5px 10px;
        border: none;
        border-radius: 20px 0 0 20px;
        background: none;
    }

    .activities-btn i{
        font-size: 1.5rem;
        color: rgb(238,185,36);
        padding: .3rem 10px 0 5px;
    }

    .activities-btn:hover {
        background: #23085a;
        border: 1px solid #23085a;
        box-shadow: 0 0 1rem var(--main-text-color);
    }

    .activities-btn:hover button, .activities-btn:hover i {
        color: #fff;
    }
</style>
