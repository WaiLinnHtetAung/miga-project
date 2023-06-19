<template>
    <div v-if="blog && status" class="blog-detail-section container">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12 mb-3 blog-detail">
                <img :src="blog.photo" alt="">
                <div class="blog-header p-3">
                    <h4>{{blog.title}}</h4>
                    <p class="mb-2" style="font-size:13px;"><i class="fa-solid fa-calendar-days"></i> {{blog.date}}</p>
                </div>
                <div class="blog-content p-3">
                    <div v-html="blog.body"></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                <TopBlogs :blogs="blogs" @seemore="goSeeMore"></TopBlogs>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading></Loading>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import TopBlogs from '../components/TopBlogs'
import { onMounted, onUpdated, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import getBlog from '@/composables/getBlog'
import getBlogs from '@/composables/getBlogs'
    export default {
  components: {
    Loading, TopBlogs },
        props: ['id'],
        setup(props) {
            let router = useRouter();
            let status = ref(true);

            let {blog, error, load} = getBlog();
            let {blogs, error: blogs_error, load: blogs_load} = getBlogs();

            load(props.id);
            blogs_load();

            watch(() => props.id, (newId) => {
               load(newId);
            })
      
            onMounted(() => {
                window.scrollTo(0,0)
            })

            onUpdated(() => {
                
                window.scrollTo(0,0)
            })

            let goSeeMore = (id) => {
                status.value = false;
                setTimeout(() => {
                    router.push(`/blog-detail/${id}`);
                    status.value = true;
                }, 300)
            }
            return {blog,error, blogs, goSeeMore, status}
        }
    }
</script>

<style scoped>
    .blog-detail-section {
        padding: 40px 0;
    }
    .blog-detail img {
        width: 80%;
        height: 350px;
        object-fit: cover;
        object-position: center;
        margin-left: 15px;

    }
    .blog-header h4 {
        font-weight: bold;
        margin: 15px 0;
        font-size: 18px;
    }
    .blog-content div {
        font-size: 14px;
    }

    @media (max-width:990px) {
        .blog-detail-section {
            padding: 40px 4%;
        }
        .blog-detail img {
            width: 100%;
            height: 350px;
            padding: 0 4%;
        }
        .blog-header h4 {
            font-weight: bold;
            font-size: 18px;
            margin: 15px 0;
        }
        .blog-header p {
            font-size: 12px;
        }
        .blog-content div {
            font-size: 12px;
        }
    }

    @media (max-width:450px) {
        .blog-detail img {
            width: 100%;
            height: 300px;
            margin-left: 0px;

        }
        .blog-header h4 {
            font-weight: bold;
            font-size: 16px;
            margin: 15px 0;
        }
        .blog-header p {
            font-size: 11px !important;
        }
    }
</style>
