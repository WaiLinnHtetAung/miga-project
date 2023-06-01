<template>
    <div class=" blogs">
        <div class="blog-header mb-3">
            <p class="m-0 p-0">RIHEA BLOGS</p>
            <h3 class="m-0 p-0">ALL RESOURCES TO HELP YOU INDEED</h3>
        </div>
        <div class="first-blog shadow my-5 bg-white">
            <div class="blog-text">
                <p class="mt-3 article" style="font-size:13px;">ARTICLE</p>
                <h5 class="mb-4">{{ blogs[0] ? blogs[0].title : '' }}</h5>
                <p class="mb-5 date" style="font-size:13px;"><i class="fa-solid fa-calendar-days"></i> {{ blogs[0] ? blogs[0].date : '' }}</p>
                <router-link :to="`/blog-detail/${blogs[0] ? blogs[0].id : ''}`" class="read btn">Read</router-link>
            </div>
            <div class="blog-image">
                <img :src="blogs[0] ? blogs[0].photo : ''" alt="">
            </div>
        </div>
        <div class="all-blogs">
            <div class="row">
                <div class="col-lg-8 col-md-6 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" v-for="(blog, index) in blogs" :key="index">
                            <div class="img-card bg-info">
                                <img :src="blog.photo" alt="">
                                <div class="news-content">
                                    <p class="mt-2"><i class="fa-solid fa-calendar-days"></i>{{ blog.date }}</p>
                                    <h4>{{blog.title.slice(0,70)}} ...</h4>
                                    <div class="news-read">
                                        <hr>
                                        <div class="read-more">
                                            <div class="pointer" @click="readMore">
                                                <router-link :to="`/blog-detail/${blog.id}`">Read More<i class="fa-solid fa-angle-right ms-2"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <TopBlogs :blogs="blogs" @seemore="goSeeMore"></TopBlogs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBlogs from '../components/TopBlogs'
    import { onMounted } from 'vue'
    import {useRouter} from 'vue-router'
    import getBlogs from '@/composables/getBlogs'
    export default {
  components: { TopBlogs },
        setup() {
            let router = useRouter();
            let {blogs, error, load} = getBlogs();
            load();
            
            onMounted(() => {
                window.scrollTo(0,0);
            })

            let goSeeMore = (id) => router.push(`/blog-detail/${id}`)

            return {blogs, error, goSeeMore}
        }
    }
</script>

<style scoped>
    .blogs {
        padding: 40px 9%;
        background: linear-gradient(#fff 50vh, #eee 50vh);
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
        object-position: center;
        object-fit: cover;
    }
    .all-blogs {
        padding: 40px 0;
    }
     .img-card {
        background: #eee;
        overflow: hidden;
        padding-bottom: 20px;
        height: 400px;
        position: relative;

    }

    .img-card img {
        width: 100%;
        height: 200px;
        transition: .5s ease;
        object-fit: cover;
        object-position: center;
    }

    .img-card img:hover {
        transform: scale(1.07);
    }

    .news-content {
        padding: 10px 30px;
        background: #fff;
        height: 100%;
    }
    .news-read {
        position: absolute;
        width: 100%;
        bottom: 10px;
        right: 5px;
        padding: 0 30px;
    }

    .news-content p {
        color: #707070;
        font-size: 12px;
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
        font-size: 16px;
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
    .read-more a {
        text-decoration: none;
        color: #707070;
        font-size: 13px;
    }

    @media (max-width:990px) {
        .blogs {
            padding: 20px 9%;
            background: linear-gradient(#fff 25vh, #eee 25vh);
        }
        .blog-header p {
            font-size: 14px;
        }
        .blog-header h3 {
            font-size: 1.2rem;
        }
        .first-blog {
            display: flex;
            height: 220px;
            margin: 50px 0 10px !important;
        }
        .blog-text {
            width: 50%;
            padding: 30px 0px 0 40px;
        }
        .blog-text h5 {
            font-size: 1rem;
            font-weight: bold;
        }
        .blog-text .article {
            font-size: 11px !important;
            margin: 0 0 5px !important;
        }
        .blog-text .date {
            margin-bottom: 20px !important;
            font-size: 11px !important;
        }
        .blog-text a {
            font-size: 11px;
            padding: 5px 10px;
        }
        .blog-image {
            width: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .blog-image img {
            width: 75%;
            height: 200px;
            object-position: center;
        }

        .all-blogs {
            padding: 40px 0;
        }
        .img-card {
            background: #eee;
            overflow: hidden;
            padding-bottom: 20px;
            height: 320px;
            position: relative;

        }

        .img-card img {
            width: 100%;
            height: 140px;
            transition: .5s ease;
            object-fit: cover;
            object-position: center;
        }

        .img-card img:hover {
            transform: scale(1.07);
        }

        .news-content {
            padding: 10px 20px;
        }

        .news-content p {
            color: #707070;
            font-size: 12px;
        }

        .news-content h4 {
            color: rgb(12, 11, 11);
            margin-top: 13px;
            padding-bottom: 10px;
            text-align: start;
            font-size: 14px;
        }

        .news-content hr {
            height: 1px;
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
        .read-more a {
            text-decoration: none;
            color: #707070;
            font-size: 12px;
        }

    }

    @media (max-width:450px) {
        .blogs {
            padding: 20px 9%;
            background: linear-gradient(#fff 35vh, #eee 25vh);
        }
        .blog-header p {
            font-size: 12px;
        }
        .blog-header h3 {
            font-size: 1rem;
        }
        .first-blog {
            display: flex;
            flex-direction: column;
            height: 500px;
            margin: 0 !important;
            padding-top: 0 !important;
        }
        .blog-text {
            width: 100%;
            padding: 30px 0px 0 30px;
            text-align: left;
        }
        .blog-text h5 {
            font-size: .9rem;
            font-weight: bold;
        }
        .blog-text .article {
            font-size: 11px !important;
            margin: 0 0 5px !important;
        }
        .blog-text .date {
            margin-bottom: 20px !important;
            font-size: 11px !important;
        }
        .blog-text a {
            font-size: 11px;
            padding: 5px 10px;
        }
        .blog-image {
            margin-top: 3rem;
            width: 100%;
        }
   
    }
    
</style>
