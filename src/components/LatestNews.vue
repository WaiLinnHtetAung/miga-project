<template>
    <div class="main-bg latest-news-container">
        <div class="section-header">
            <p>New Updates</p>
            <h2>Latest News & Updates</h2>
        </div>

        <div class="news-section mt-5">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3" v-for="(blog, index) in blogs" :key="index">
                    <div class="img-card">
                        <img :src="blog.img" alt="">
                        <div class="news-content">
                            <p class="mt-2"><i class="fa-solid fa-calendar-days"></i> {{blog.date}}</p>
                            <h4>{{blog.title.slice(0,90)}} ...</h4>
                            <hr>
                            <div class="read-more">
                                <div class="pointer" @click="readAll">
                                    <i class="fa-solid fa-newspaper me-2"></i> Read All
                                </div>
                                <div class="pointer" @click="readMore">
                                    Read More<i class="fa-solid fa-angle-right ms-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();
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

            let readAll = () => router.push('/all-blogs');
            let readMore = () => router.push('/blog-detail');

            return {blogs, readAll, readMore}
        }
    }
</script>

<style scoped>
    .latest-news-container {
        padding: 50px 9%;
    }

    .section-header {
        text-align: center;
        font-size: 20px;
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
        justify-content: space-between;
        align-items: center;
    }

    .read-more i {
        color: #403174;
    }

    .read-more div {
        color: #707070;
        font-size: 14px;
    }
</style>
