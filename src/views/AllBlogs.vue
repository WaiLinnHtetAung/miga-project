<template>
    <div class="container blogs">
        <div class="blog-header mb-3">
            <p class="m-0 p-0">RIHEA BLOGS</p>
            <h3 class="m-0 p-0">ALL RESOURCES TO HELP YOU INDEED</h3>
        </div>
        <div class="first-blog shadow">
            <div class="blog-text">
                <p class="mt-3" style="font-size:13px;">ARTICLE</p>
                <h5 class="mb-4">ဒီနေ့ခေတ်မှာ IGCSE ဟာ နိုင်ငံတကာပညာရေးတံခါးပေါက်တွေကို ဖွင့်ပေးမယ့် သော့တစ်ခုဖြစ်လာပါပြီ 🔑 နိုင်ငံခြားတက္ကသိုလ်တွေမှာပညာသင်ချင်တဲ့ အိပ်မက်တွေကိုလည်း အကောင်အထည်ဖော်ချင်တယ်...  </h5>
                <p class="mb-4" style="font-size:13px;"><i class="fa-solid fa-calendar-days"></i> October 22, 2023</p>
                <router-link to="/blog-detail" class="read">Read</router-link>
            </div>
            <div class="blog-image">
                <img src="../assets/images/blog4.jpg" alt="">
            </div>
        </div>
        <div class="all-blogs">
            <div class="row">
                <div class="col-lg-8 col-md-6 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-3" v-for="(blog, index) in blogs" :key="index">
                            <div class="img-card">
                                <img :src="blog.img" alt="">
                                <div class="news-content">
                                    <p class="mt-2"><i class="fa-solid fa-calendar-days"></i> {{blog.date}}</p>
                                    <h4>{{blog.title.slice(0,90)}} ...</h4>
                                    <hr>
                                    <div class="read-more">
                                        <!-- <div class="pointer" @click="readAll">
                                            <i class="fa-solid fa-newspaper me-2"></i> Read All
                                        </div> -->
                                        <div class="pointer" @click="readMore">
                                            Read More<i class="fa-solid fa-angle-right ms-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="top-blogs">
                        THE TOP FIVE BLOGS
                    </div>
                    <div class="top-blogs-list mb-3">
                        <div><i class="fa-solid fa-newspaper"></i></div>
                        <div class="">It is a long established fact that a reader will be distracted by the readable content of</div>
                    </div>
                    <div class="top-blogs-list mb-3">
                        <div><i class="fa-solid fa-newspaper"></i></div>
                        <div class="">It is a long established fact that a reader will be distracted by the readable content of</div>
                    </div>
                    <div class="top-blogs-list mb-3">
                        <div><i class="fa-solid fa-newspaper"></i></div>
                        <div class="">It is a long established fact that a reader will be distracted by the readable content of</div>
                    </div>
                    <div class="top-blogs-list mb-3">
                        <div><i class="fa-solid fa-newspaper"></i></div>
                        <div class="">It is a long established fact that a reader will be distracted by the readable content of</div>
                    </div>
                    <div class="top-blogs-list mb-3">
                        <div><i class="fa-solid fa-newspaper"></i></div>
                        <div class="">It is a long established fact that a reader will be distracted by the readable content of</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
    export default {
        setup() {
            let blogs = ref([
                {
                    date : 'August 20, 2022',
                    title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    img: require('../assets/images/blog1.jpg')
                },
                {
                    date : 'August 20, 2022',
                    title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    img: require('../assets/images/blog2.png')
                },
                {
                    date : 'August 20, 2022',
                    title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    img: require('../assets/images/blog3.jpg')
                },
            ]);

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {blogs}
        }
    }
</script>

<style scoped>
    .blogs {
        padding: 40px 0;
    }
    .blog-header {
        text-align: center;
    }
    .blog-header h3 {
        font-weight: bold;
    }
    .first-blog {
        display: flex;
        height: 300px;
        margin: 50px 0 20px;
    }
    .blog-text {
        width: 50%;
        padding: 30px 0px 0 40px;
    }
    .blog-text h5 {
        font-size: 1.2rem;
        font-weight: bold;
    }
  
    .blog-image {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blog-image img {
        width: 75%;
        height: 250px;
    }
    .read {
        text-decoration: none;
        background: #23085a;
        color: var(--main-text-color);
        padding: 7px 20px;
        border-radius: 10px;
        font-weight: bold;
        transition: .5s ease;
    }
    .read:hover {
        box-shadow: 0 0 1.6rem var(--main-text-color);
        font-size: 1.1rem;
    }
    .all-blogs {
        padding: 40px 0;
    }
     .img-card {
        background: #eee;
        overflow: hidden;
        padding-bottom: 20px;
    }

    .img-card img {
        width: 100%;
        height: 230px;
        transition: .5s ease;
    }

    .img-card img:hover {
        transform: scale(1.07);
    }

    .news-content {
        padding: 10px 30px;
        background: #fff;
    }

    .news-content p {
        color: #707070;
        font-size: 14px;
    }

    .news-content p i {
        color: #403174;
        margin-right: 10px;
    }

    .news-content h4 {
        color: rgb(12, 11, 11);
        margin-top: 20px;
        padding-bottom: 10px;
        text-align: start;
        font-size: 18px;
    }

    .news-content hr {
        height: 2px;
        color: #151837;
    }

    .read-more {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .read-more i {
        color: #403174;
    }

    .read-more div {
        color: #707070;
        font-size: 14px;
    }
    .top-blogs {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        background: #23085a;
        color: var(--main-text-color);
        padding: 8px 0;
        margin-bottom: 1rem;
    }
    .top-blogs-list {
        display: flex;
        gap: 1.3rem;
        padding: 0 4px;
        /* background: #f5f5f5; */
    }
    .top-blogs-list i {
        font-size: 1.5rem;
    }
    .top-blogs-list>div {
        font-size: 14px;
        text-align: justify;
    }
</style>
