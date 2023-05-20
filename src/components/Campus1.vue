<template>
    <div>
        <div class="row">
            <img src="../assets/images/ygnview.webp" alt="">
            <div class="img-caption">
                RIHEA Campus In Yangon
            </div>
        </div>
        <div class="row">
            <div class="section-header mt-5 mb-3">
                <h2>RIHEA Campus 1</h2>
            </div>
            <div class="campus-quo">
                <p>
                    Rangoon International Higher Education Academy (RIHEA) is a beacon of educational excellence, where students embark on a transformative journey of growth and discovery. With a dynamic curriculum, dedicated educators, and state-of-the-art facilities, we provide an enriching environment that nurtures the unique talents and passions of every student. Our holistic approach to education fosters critical thinking, creativity, and a global perspective, empowering students to become compassionate leaders of tomorrow. We strive to create a supportive community where learning is engaging, collaborative, and fun. At RIHEA, we are committed to unlocking the full potential of each student, equipping them with the skills and knowledge to succeed in an ever-evolving world.
                </p>
                <div class="school-animate">
                    <img src="../assets/images/Happy-Kids-in-front-of-School-Animation.gif" alt="">
                </div>
            </div>
        </div>
        <div class="contact-header">
            <div class="row mb-3 pt-4 fw-bold">
                <h3 class="text-center fw-bold">Contact Us</h3>
            </div>
            <div class="contact-us container ">
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-clock"></i></div>
                    <p class="contact-head">Opening Hours</p>
                    <div>
                        <p>9:00 AM to 5:00 PM</p>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <p class="contact-head">Our Address</p>
                    <div>
                        <p>အမှတ် ၅၀၄/၅၀၆၊ ရွှေမြန်မာဆောက်လုပ်ရေး၊ ၃လွှာ၊ A-4၊ ၃၉ လမ်းအောက်ဘလောက၊ မဟာဗန္ဓုလလမ်းနှင့် ကုန်သည်လမ်းကြား၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို။</p>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                    <p class="contact-head">Call Us</p>
                    <div>
                        <p>(+95)942000120 <br> (+95)942000130</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7640.095991721634!2d96.1562880429291!3d16.774287558394025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec87973cb12b%3A0xe16b702dae6bba2b!2sKyauktada%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1684243688941!5m2!1sen!2smm" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="campus-experience mt-5">
            <div class="section-header">
                <h2>Campus Experience</h2>
            </div>
            <p class="text-center my-4 py-4">Our Campus offer those who want to be a outstanding students with warm. This is the place where you can level up and find precious colleagus.</p>

            <div class="campus-images container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga20.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga10.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga19.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga16.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga21.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga22.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick, onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .row img {
        width: 100%;
        height: 400px;
        position: relative;
    }
    .img-caption {
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translate(-50%, -50%);
        background: #23085a;
        color: rgb(238,185,36);
        width: 500px;
        font-size: 2rem;
        text-align: center;
    }
    .campus-quo {
        width: 700px;
        margin: 5px auto;
    }
    .campus-quo p {
        text-align: center;
        font-size: 14px;
        color: #3f296a;
    }
    .school-animate {
        margin: 10px auto 20px;
        text-align: center;
    }
    .school-animate img {
        width: 550px;
    }
    .contact-us {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
    }
    .contact-card {
        width: 300px;
        height: 250px;
        text-align: center;
    }
    .contact-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        background: #23085a;
        margin: 10px auto;
    }
    .contact-icon i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: #f2ca2f;
    }
    .contact-head {
        font-weight: bold;
        font-size: 20px;
        margin: 15px auto;
    }
    .contact-header {
        background-image: linear-gradient(to bottom,#f2ca2f, rgba(0, 0, 255, 0.5));
        padding: 20px 0 30px;
    }
    .campus-experience {
        padding: 40px 9%;
    }
    .campus-images img {
        width: 100%;
        height: 300px;
    }

    @media (max-width:990px) {
        .row img {
            width: 100%;
            height: 300px;
        }
        .img-caption {
            position: absolute;
            top: 28%;
            left: 65%;
            transform: translate(-40%, -40%);
            width: 380px;
            font-size: 1.4rem;
            text-align: center;
        }
        .section-header h2 {
            font-size: 1.2rem;
        }
        .campus-quo p {
            font-size: 12px;
        }
        .school-animate img {
            width: 430px;
        }
        .contact-us {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 3%;
        }
        .contact-card {
            width: 200px;
            height: 250px;
            text-align: center;
        }
        .contact-card p {
            font-size: 12px;
        }
        .contact-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: relative;
            background: #23085a;
            margin: 10px auto;
        }
        .contact-icon i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.2rem;
            color: #f2ca2f;
        }
        .contact-head {
            font-weight: bold;
            font-size: 16px;
            margin: 5px auto;
        }
        .contact-header {
            background-image: linear-gradient(to bottom,#f2ca2f, rgba(0, 0, 255, 0.5));
            padding: 20px 0 0px;
        }

        .map iframe {
            height: 300px;
        }
        .campus-experience {
            padding: 10px 9%;
        }
        .campus-experience p {
            font-size: 13px;
            margin-top: 0px !important;
            padding-top: 0px !important;
        }
        .campus-images img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width:450px) {
        .row img {
            width: 100%;
            height: 200px;
        }
        .img-caption {
            position: absolute;
            top: 22%;
            left: 59%;
            transform: translate(-40%, -40%);
            width: 270px;
            font-size: 1rem;
            text-align: center;
        }
        .section-header {
            margin-top: 2rem !important;
        }
        .section-header h2 {
            font-size: 1.1rem;
        }
        .campus-quo {
            padding: 0 9%;
        }
        .campus-quo p {
            font-size: 12px;
        }
        .school-animate img {
            width: 300px;
        }
        .contact-us {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 3%;
        }
        .contact-card {
            width: 200px;
            height: 200px;
            text-align: center;
        }
        .campus-experience {
            padding: 2px 9%;
        }
        .campus-experience {
            margin-top: 10px !important;
        }
        .campus-experience p {
            font-size: 11px;
        }
        .campus-images img {
            width: 100%;
            height: 230px;
        }
    }
    
</style>
