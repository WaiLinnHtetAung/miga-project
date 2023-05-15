<template>
    <div class="images sec-bg">
        <div class="img">
            <img src="../assets/images/miga/miga1.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga2.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga3.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga4.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga5.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga6.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga7.jpg" alt="">
        </div>
        <div class="img">
            <img src="../assets/images/miga/miga8.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .images {
        padding: 20px 3%;
        display: flex;justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: .8rem;
    }
    .img {
        overflow: hidden;
    }
    .img img {
        width: 300px;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    .img img:hover {
        transform: scale(1.1);
    }
</style>
