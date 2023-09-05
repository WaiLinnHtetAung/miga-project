<template>
    <div class="greeting-video">
        <div class="section-header">
            <h2 data-aos="fade-up">GREETING FROM OUR STUDENTS</h2>
        </div>
        
        <div class="video">
            <video controls autoplay muted>
                <source src="@/assets/videos/greeting.mp4" type="video/mp4">
                <source src="@/assets/videos/greeting.mp4" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .greeting-video {
        background: #fffefe;
        padding: 80px 10px;
    }

    .section-header {
        margin-bottom: 60px;
    }
    .video {
        text-align: center;
    }

    video {
        width: 60%;
        height: 50%;
    }

    @media (max-width: 490px) {
        .section-header h2 {
            font-size: 20px;
        }

        video {
            width: 90%;
            height: 100%;
        }
    }

</style>
