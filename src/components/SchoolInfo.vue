<template>
    <div class=" info main-bg">
        <div class="row mt-5">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 img-head mb-5">
                <img src="../assets/images/info.webp" alt="">
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 ">
                <h2><span>RIHEA </span>Gives You Guaranteed Results</h2>
                <div class="info-content">
                    <p><i class='bx bxs-bookmark'></i>Our method has helped millions of learners since 1972.</p>
                    <p><i class='bx bxs-bookmark'></i>Learn with Certified English Teachers in our Total English Environment.</p>
                    <p><i class='bx bxs-bookmark'></i>The most unique and flexible way to learn English.</p>
                    <p><i class='bx bxs-bookmark'></i>We have: Online, In-Center or Full Access (Online + In-Center).</p>
                </div>
                <hr>
                <p class="info-text">At RIHEA we’ve helped more than three million students achieve their goals. Whether you are a beginner or a more advanced level, our unique and proven method will help you learn, progress and improve.</p>

                <div class="contact-btn">
                    <button>Contact Us </button>
                    <i class='bx bx-envelope' ></i>
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
    .info {
        padding: 50px 9%;
        height: 90vh;
    }

    .img-head  img{
        width: 100%;
        height: 400px;
    }

    .info-content {
        margin-top: 2.5rem;
    }

    .info-content p i {
        color: var(--main-text-color);
        margin-right: 1rem;
    }

    .info-content p {
        font-size: 14px;
        line-height: 20px;
    }

    .info-text {
        font-size: 14px;
        color: #bdb8b8;
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
            padding: 40px 9%;
            height: auto;
        }
    }
</style>
