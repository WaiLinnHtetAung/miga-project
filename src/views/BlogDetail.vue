<template>
    <div class="blog-detail-section container">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12 mb-3 blog-detail">
                <img :src="blog.img" alt="">
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
</template>

<script>
import TopBlogs from '../components/TopBlogs'
import { computed, onMounted, onUpdated, ref } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
    export default {
  components: { TopBlogs },
        props: ['id'],
        setup(props) {
            let store = useStore();
            let router = useRouter();
            let blog = ref('');
            let blogs = ref('');
            onMounted(() => {
                store.dispatch('getBlog', props.id);
                blog.value = store.state.blogs.blog;
                blogs.value = store.getters.getBlogs;
                window.scrollTo(0,0)
            })

            onUpdated(() => {
                store.dispatch('getBlog', props.id);
                blog.value = store.state.blogs.blog;
            })

            let goSeeMore = (id) => router.push(`/blog-detail/${id}`)
            return {blog, blogs, goSeeMore}
        }
    }
</script>

<style scoped>
    .blog-detail-section {
        padding: 40px 0;
    }
    .blog-detail img {
        width: 100%;
        height: 500px;
    }
    .blog-header h4 {
        font-weight: bold;
        margin: 15px 0;
    }
</style>
