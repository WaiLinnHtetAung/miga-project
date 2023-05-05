<template>
    <div class="images sec-bg">
        <div class="img1">
            <img src="../assets/images/edu1.png" alt="">
        </div>
        <div class="img2">
            <img src="../assets/images/edu2.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .images {
        padding: 50px 7%;
        display: flex;justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .img1 {
        width: 600px;
    }

    .img1 img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .img2 {
        width: 600px;
    }

    .img2 img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
