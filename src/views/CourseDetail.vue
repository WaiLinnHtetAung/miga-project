<template>
    <div v-if="slug == 'pre-ged'">
        <PreGED></PreGED>
    </div>
    <div v-else-if="slug == 'ged'">
        <GED></GED>
    </div>
    <div v-else-if="slug == 'pre-igcse'">
        <PreIGCSE></PreIGCSE>
    </div>
    <div v-else-if="slug == 'o-igcse'">
        <OlevelIGCSE></OlevelIGCSE>
    </div>
    <div v-else-if="slug == 'eng-4-skills'">
        <Eng4Skills></Eng4Skills>
    </div>
</template>

<script>
import Eng4Skills from '../components/Eng4Skills'
import OlevelIGCSE from '../components/OlevelIGCSE'
import PreIGCSE from '../components/PreIGCSE'
import { onMounted, onUpdated, ref } from 'vue'

    import GED from '../components/GED'
    import PreGED from '../components/PreGED'
    export default {
        components: {
    Eng4Skills,
    OlevelIGCSE,
    PreIGCSE,GED, PreGED },
        props: ['slug'],
        setup() {

            onMounted(() => {
                window.scrollTo(0,0)
            }),
            onUpdated(() => {
                window.scrollTo(0,0)
            })

        }
    }
</script>

<style>
    /* .detailPage {
        background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg-p-3.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    } */
</style>
