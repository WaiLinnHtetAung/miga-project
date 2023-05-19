<template>
    <div class=" info">
        <div class="row mt-5">
            <div data-aos="zoom-in" class="col-lg-6 col-md-12 col-sm-12 col-12 img-head mb-5">
                <img src="../assets/images/miga/miga15.jpg" alt="">
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 ">
                <h2 data-aos="fade-left"><span>RIHEA </span>Gives You Guaranteed Facilities</h2>
                <div data-aos="zoom-in-left" class="info-content">
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>A Flexible schedule to fit your needs</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Small class sizes for personalized attention</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Experienced teachers dedicated to your success</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>A comprehensive curriculum designed to prepare you for the IGCSE and GED tests</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Support every step of the way as you work towards achieving your academic goals</p></div>
                </div>
                <hr>
                <p data-aos="zoom-in-left" class="info-text">At RIHEA we’ve helped more than three million students achieve their goals. Whether you are a beginner or a more advanced level, our unique and proven method will help you learn, progress and improve.</p>

                <div class="contact-btn" @click="goContact">
                    <button>Contact Us </button>
                    <i class='bx bx-envelope' ></i>
                </div>

                
            </div>
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
    .info {
        padding: 50px 9%;
        height: 90vh;
        margin-bottom: 25px;
        /* background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover; */
    }

    .img-head  img{
        width: 100%;
        height: 450px;
    }

    .info-content {
        margin-top: 2.5rem;
    }

    .info-content i {
        color: var(--main-text-color);
    }

    .info-content p {
        font-size: 14px;
        line-height: 15px;
    }

    .info-text {
        font-size: 14px;
        color: #5d3e89;
    }

    .contact-btn {
        width: 150px;
        display: flex ;
        background: var(--main-text-color);
        border-radius: 12px;
        transition: .5s ease;
    }

    button {
        display: inline-block;
        color: #3a2d7c;
        padding: 5px 10px;
        border: none;
        border-radius: 20px 0 0 20px;
        background: none;
    }

    .contact-btn i{
        font-size: 1.5rem;
        color: #3a2d7c;
        padding: .3rem 10px 0 5px;

    }

    .contact-btn:hover {
        background: #3a2d7c;
        border: 1px solid var(--main-text-color);
        box-shadow: 0 0 1rem var(--main-text-color);
    }

    .contact-btn:hover button, .contact-btn:hover i {
        color: #fff;
    }


    @media (max-width:850px) {
        .info {
            padding: 40px 10%;
            height: auto;
        }

        .img-head img {
            height: 400px;
        }
        .info h2 {
            font-size: 20px;
        }
        .info-content i, .info-content p, .info-text  {
            font-size: 12px;
        }
        .contact-btn {
            font-size: 12px;
            width: 130px;
        }
        .contact-btn i {
            font-size: 1.2rem;
        }
    }

    @media (max-width:450px) {
        .row {
            margin-top: 0 !important;
        }
        .img-head img {
            height: 230px;
        }
        .info h2 {
            font-size: 17px;
        }
        .info-content{
            margin-top: 1.2rem;
        }
    }
</style>
