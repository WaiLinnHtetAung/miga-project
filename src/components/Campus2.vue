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
                <h2>RIHEA Campus 2</h2>
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
                        <p>၆လွှာ၊ မြေနီကုန်းမှတ်တိုင်၊ KING ပေါက်ဆီဆိုင် အပေါ်၊ ၆ လွှာ။</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7638.821402996337!2d96.13080074293123!3d16.805969506573742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb46890098cb%3A0x705a0ebc0e973dbc!2sMyaynigone%2C%20Yangon!5e0!3m2!1sen!2smm!4v1684245520341!5m2!1sen!2smm" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="campus-experience">
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
    export default {
        
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
</style>
