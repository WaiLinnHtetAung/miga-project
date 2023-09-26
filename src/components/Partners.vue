<template>
    <div class="partners">
        <div class="header">
            <h2>OUR PARTNERS</h2>
        </div>
        <div class="partner-content">
            <div class="partner-card">
                <img :src="require('@/assets/images/partners/1.png')" alt="">
                <div class="site-link">
                    <div class="social ">
                        <router-link to="#"><i class="fa-brands fa-facebook" style="color: #3b5998;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-instagram" style="color: #e95950;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-twitter" style="color: #00aecc;"></i></router-link>
                    </div>
                    <a href="#" class="view-profile-btn">View Profile</a>
                </div>
            </div>
            <div class="partner-card">
                <img :src="require('@/assets/images/partners/2.png')" alt="">
                <div class="site-link">
                    <div class="social ">
                        <router-link to="#"><i class="fa-brands fa-facebook" style="color: #3b5998;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-instagram" style="color: #e95950;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-twitter" style="color: #00aecc;"></i></router-link>
                    </div>
                    <a href="#" class="view-profile-btn">View Profile</a>
                </div>
            </div>
            <div class="partner-card">
                <img :src="require('@/assets/images/partners/3.png')" alt="">
                <div class="site-link">
                    <div class="social ">
                        <router-link to="#"><i class="fa-brands fa-facebook" style="color: #3b5998;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-instagram" style="color: #e95950;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-twitter" style="color: #00aecc;"></i></router-link>
                    </div>
                    <a href="#" class="view-profile-btn">View Profile</a>
                </div>
            </div>
            <div class="partner-card">
                <img :src="require('@/assets/images/partners/4.png')" alt="">
                <div class="site-link">
                    <div class="social ">
                        <router-link to="#"><i class="fa-brands fa-facebook" style="color: #3b5998;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-instagram" style="color: #e95950;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-youtube" style="color: #c4302b;"></i></router-link>
                        <router-link to="#"><i class="fa-brands fa-twitter" style="color: #00aecc;"></i></router-link>
                    </div>
                    <a href="#" class="view-profile-btn">View Profile</a>
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
    .partners {
        padding: 80px 15%;
        margin-bottom: 30px;
    }

    .partners .header {
        text-align: center;
    }

    .partners .header h2 {
        font-weight: bold;
        font-size: 33px;
    }

    .partners .partner-content {
        margin: 80px 0 50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .partner-content .partner-card {
        border: 1px solid #e6d7d7;
        padding: 10px;
        overflow: hidden;
        position: relative;
        height: 260px;
        transition: .5s ease;
    }

    .partner-card img {
        width: 300px;
        height: 200px;
        object-fit: contain;
    }

    .partner-card .social {
        display: flex;
        justify-content: center;
        gap: 20px;
        transition: .3s ease-out;
    }

    .partner-card .social a {
        font-size: 20px;
    }

    .partner-card .site-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        margin: 10px auto;
        margin-bottom: 0px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        transform: translateY(0%);
        transition: .5s ease;
    }

    .partner-card:hover {
        background: rgb(231, 229, 229, .5);
    }

    .partner-card:hover .site-link {
        transform: translateY(-40px);
    }


    .partner-card:hover .site-link .view-profile-btn {
        transform: translateY(0);
    }

    .partner-card .site-link .view-profile-btn {
        text-decoration: none;
        background: rgb(226, 166, 13);
        padding: 3px 30px;
        color: #fff;
        border-radius: 10px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        width: 70%;
        margin: 0 auto;
        transform: translateY(200%);
        transition: .5s ease-in-out;
    }


    @media (max-width: 1500px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 30px;
        }

        .partners .header h2 {
            font-size: 30px;
        }

        .partner-content .partner-card {
            height: 210px;
        }
        .partner-card img {
            width: 200px;
            height: 150px;
        }
    
        .partner-card .social a {
            font-size: 16px;
        }
    
        .partner-card:hover .site-link {
            transform: translateY(-40px);
        }
    
    
        .partner-card .site-link .view-profile-btn {
            padding: 3px 20px;
            font-size: 11px;
            width: 50%;
        }
    }

    @media (max-width: 1200px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 0px;
        }
    
        .partners .header h2 {
            font-size: 28px;
        }
    }

    @media (max-width: 990px) {
        .partners {
            padding: 40px 9%;
            margin-bottom: 0px;
        }
    
        .partners .header h2 {
            font-size: 24px;
        }
    }

    @media (max-width: 510px) {
        .partner-content .partner-card {
            height: 290px;
            margin-bottom: 15px;
        }
        .partner-card img {
            width: 300px;
            height: 200px;
        }
    
        .partner-card .social a {
            font-size: 20px;
        }
    
        .partner-card .site-link {
            transform: translateY(-40px) !important;
        }
    
        .partner-card .site-link .view-profile-btn {
            transform: translateY(0);
        }
    
        .partner-card .site-link .view-profile-btn {
            padding: 3px 20px;
            font-size: 11px;
            width: 50%;
        }
    }
</style>
