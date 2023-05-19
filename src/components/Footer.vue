<template>
    <footer class="bg-transparent">
        <div class="footer1 ">
            <div class=" row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12 school-info ">
                    <div class="logo ">
                        <img src="../assets/images/logo.png" alt="">
                        <div  class="mt-3">
                            <span style="color: var(--main-text-color); font-weight: bold; font-size: 1.5rem;">RIHEA</span>
                            <p class="text-white">Education Center</p>
                        </div>
                    </div>
                    <div class="school-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae nobis fuga quasi dolor eaque nemo officiis harum ut culpa?</p>
                    </div>
                    <div class="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100069139800062"><i class="fa-brands fa-facebook" style="color: #0165E1;"></i></a>
                        <a href=""><i class="fa-brands fa-instagram" style="color: #F56040 ;"></i></a>
                        <a href=""><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="address">
                        <h4>Address</h4>
                        <div class="address-detail">
                            <div class="row mb-3">
                                <div class="col-1">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="col-9">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam modi earum aperiam sit? 
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-1">
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <div class="col-9">
                                    09 425305939
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="col-9">
                                    myanmarigcseandgedacademy.miga<br>@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12 pt-4 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3817.865168043599!2d96.10528907525472!3d16.882563117151637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzU3LjIiTiA5NsKwMDYnMjguMyJF!5e0!3m2!1sen!2sus!4v1683046590240!5m2!1sen!2sus" width="600" height="270px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div class="footer-bar d-flex justify-content-between align-items-center">
            <p>Copyright 2023 MIGA. All Rights Reserved.</p>
            <p>Powered by itGateway</p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer1 {
        padding: 50px 40px;
        background: #23085a;
        border-radius: 0px 100px 0 0;
    }

    .footer-bar {
        height: 40px;
        padding: 0 9%;
        background: var(--main-text-color);
    }

    .footer-bar p {
        color: #23085a;
        padding-top: 15px;
        font-weight: bold;
    }

    iframe {
        border-radius: 6px;
        width: 100%;
    }

    .school-info {
        margin-top: -20px;
        padding-left: 20px;
    }

    .school-info img {
        width: 150px;
        height: 150px;
    }

    .logo {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .logo img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .school-content p{
        padding-left: 10px;
        color: #fff;
        font-size: 15px;
        text-align: justify;
    }

    .social-media {
        padding: 10px 0 0 10px;
    }

    .social-media a {
        margin-right: 30px;
    }

    .social-media i {
        transition: .5s ease;
        font-size: 2.2rem;
    }

    .social-media a:hover i{
        transform: scale(1.3);
    }

    .address {
        margin-top: 20px;
        padding-left: 30px;
    }

    .address h4 {
        color: #fff;
    }

    .address .address-detail {
        margin-top: 50px;
    }

    .address-detail div {
        color: #fff;
        font-size: 15px;
    } 
    .address div i {
        color: var(--main-text-color);
        font-size: 17px;
    }
    
    .map {
        margin-left: -27px;
    }

    @media (max-width:850px) {
        .address h4{
            padding-top: 30px;
            font-size: 25px;
        }
        .map {
            margin-top: 20px;
            width: 100%;
            margin: 20px auto 0;
        }
        .social-media i {
            font-size: 1.5rem;
        }
    }
</style>
