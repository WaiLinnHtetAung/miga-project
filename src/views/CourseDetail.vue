<template>
    <div ref="detailPage" class="detailPage">
        <div v-if="course == 'pre-ged'">
            <PreGED></PreGED>
        </div>
        <div v-else-if="course == 'ged'">
            <GED></GED>
        </div>
        <div v-else-if="course == 'pre-igcse'">
            <PreIGCSE></PreIGCSE>
        </div>
        <div v-else-if="course == 'o-igcse'">
            <OlevelIGCSE></OlevelIGCSE>
        </div>
        <div v-else>
            <Eng4Skills></Eng4Skills>
        </div>
    </div>
</template>

<script>
import Eng4Skills from '../components/Eng4Skills'
import OlevelIGCSE from '../components/OlevelIGCSE'
import PreIGCSE from '../components/PreIGCSE'
import { onMounted, ref } from 'vue'

    import GED from '../components/GED'
    import PreGED from '../components/PreGED'
    export default {
        components: {
    Eng4Skills,
    OlevelIGCSE,
    PreIGCSE,GED, PreGED },
        props: ['slug'],
        setup(props) {
            let course = ref(props.slug);
            let detailPage = ref(null);

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {course, detailPage}
        }
    }
</script>

<style scoped>
    /* .detailPage {
        background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg-p-3.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    } */
</style>
