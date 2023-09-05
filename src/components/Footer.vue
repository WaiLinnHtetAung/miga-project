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
                        <p>မြန်မာနိုင်ငံရှိ ကျောင်းသား၊ ကျောင်းသူများ၏ ပညာရေး ခရီးလမ်းကြောင်းကို မြတ်နိုးတန်ဖိုးထားသောကြောင့် စေတနာအရင်းခံဖြင့် လမ်းညွှန်သင်ကြားပေးခြင်း။</p>
                        <p>အတွေ့အကြုံရှိ အရည်အချင်းရှိသော ဆရာ၊ဆရာမများမှ စာတွေ့အပြင် လက်တွေ့များပါ သင်ကြားပေးနိုင်ခြင်း။</p>
                        <p>ကျောင်းစာသင်ခန်းအတွင်း ကျောင်းစာအပြင် ပြင်ပလောက အကြောင်းအရာများကိုပါ လေ့လာစေနိုင်ရန်အတွက် Classroom Atmosphere ကိုကောင်းမွန်အောင် ဖန်တီးပေးထားခြင်း။</p>
                        <p>ကျောင်းသားများကျောင်းပြီးသည်နှင့် တစ်ပြိုင်နက် ရည်မှန်းထားသောလမ်းကြောင်းပေါ် ရောက်ရှိစေရန်၊ စိတ်ကူးအိပ်မက်ထဲရှိ အလုပ်အကိုင် အခွင့်အလမ်းများနှင့် ထပ်တူကျစေရန်အတွက် တာဝန်ယူဆောင်ရွက်ပေးခြင်း။</p>
                        <p>Founder ၏ တန်ဖိုးရှိလှသော နိုင်ငံခြားပညာတော်သင် အတွေ့အကြုံများနှင့် ကျွမ်းကျင်သော ပညာရေးအကြံပေးဝန်ထမ်းများမှ ကျောင်းသား၊သူများ၏ ဘဝပန်းခင်းလမ်းကို တာဝန်ယူပုံဖော်ပေးခြင်း။</p>
                    </div>
                    <div class="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100069139800062" target="_blink"><i class="fa-brands fa-facebook" style="color: #0165E1;"></i></a>
                        <a href=""><i class="fa-brands fa-instagram" style="color: #F56040 ;"></i></a>
                        <a href=""><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></a>
                        <a href=""><i class="fa-brands fa-tiktok" style="color: #ff0050;"></i></a>
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
                                    No. 96, ground floor, 39th street, lower block, kyauktada township, Yangon
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-1">
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <div class="col-9">
                                    <div>09 - 942 000 120</div>
                                    <div>09 - 942 000 130</div>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1872312583487!2d96.1619540583956!3d16.77079498200347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec7d2b4d4e83%3A0x2c80ab6f60748e6f!2s36%2039th%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1693194992110!5m2!1sen!2smm" width="600" height="270px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div class="footer-bar d-flex justify-content-between align-items-center">
            <p class="copy">&copy; Copyright 2023 MIGA</p>
            <p>All Rights Reserved</p>
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
        height: 35px;
        padding: 0 9%;
        background: var(--main-text-color);
    }

    .footer-bar p {
        color: #23085a;
        padding-top: 15px;
        font-weight: bold;
        font-size: 14px;
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
        font-size: 12px;
        margin-bottom: 8px;
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

    @media (max-width:990px) {
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

    @media (max-width:450px) {
        .footer-bar {
            height: auto;
            gap: 0;
        }
        .footer-bar p {
            font-size: 12px;
            font-weight: 400;
            padding: 0;
        }
        .footer-bar .copy {
            padding-top: 10px;
        }
    }
</style>
