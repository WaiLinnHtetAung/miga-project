import { ref } from 'vue';
import api from '../api/api';
import axios from 'axios';

let getBlogs = () => {
    let blogs = ref([]);
    let error = ref('');

    let load  = async() => {
        try{
            let response = await axios.get(api.getBlogs);
            if(response.status == 404) {
                throw new Error("Page not found");
            }
            blogs.value = response.data.blogs.map((blog) => {
                return {...blog, photo: api.photo_url+blog.photo};
            })
        }
        catch(err){
            error.value = err.message;
        }
    }
    return {blogs, error, load};
}

export default getBlogs;