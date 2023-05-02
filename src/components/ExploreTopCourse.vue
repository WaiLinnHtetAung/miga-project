<template>
    <div class="top-course-container container">
        <div class="section-header">
            <h2>Explore Top Courses</h2>
        </div>
        <div class="top-courses">
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #5e4ae3;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #bfaee3;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #0c5d7b;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #f26ca7;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #407c87;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #9ccd62;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #947bd3;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
            <figure class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #d1114d;">
                    <div class="mb-2"><i class='bx bx-happy-heart-eyes fs-3'></i></div>
                    <h4>Top Course</h4>
                    <p>Students - 50</p>
                </div>
                <figcaption><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></figcaption>
                <a href="#"></a>
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top-course-container {
        margin-top: 50px;
        text-align: center;
    }

    .top-course-container .top-course {
        width: 200px;
        height: 200px;
        background-color: blueviolet;
    }

    .top-courses {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
        flex-wrap: wrap;
        margin-top: 50px;
        padding: 0 20px;
    }

    .top-courses figure {
        border-radius: 12px;
    }

    figure figcaption {
        margin-top: 3rem;
        font-size: 12px !important;
    }

    .top-course {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top-course i {
        color: #e5d552;
    }
</style>
