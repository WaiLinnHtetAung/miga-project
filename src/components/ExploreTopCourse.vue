<template>
    <div class="top-course-container">
        <div data-aos="zoom-in" class="section-header">
            <h2>Explore Top Courses</h2>
        </div>
        <div class="top-courses">
            <figure data-aos="fade-down" class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #5e4ae3;">
                    <div class="mb-2"><img src="@/assets/images/top-courses/top-course1.svg" alt=""></div>
                    <h4>Pre GED Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/pre-ged"></router-link>
                <router-link class="view-btn" to="/course-detail/pre-ged">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #bfaee3;">
                    <div class="mb-2"><img src="@/assets/images/top-courses/top-course2.svg" alt=""></div>
                    <h4>GED Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/ged"></router-link>
                <router-link class="view-btn" to="/course-detail/ged">View Detail</router-link>
            </figure>
            <figure data-aos="fade-down" class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #0c5d7b;">
                    <div class="mb-2"><img src="@/assets/images/top-courses/top-course3.svg" alt=""></div>
                    <h4>O Level IGCSE</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/o-igcse"></router-link>
                <router-link class="view-btn" to="/course-detail/o-igcse">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #f26ca7;">
                    <div class="mb-2"><img src="@/assets/images/top-courses/top-course4.svg" alt=""></div>
                    <h4>Pre IGCSE Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/pre-igcse"></router-link>
                <router-link class="view-btn" to="/course-detail/pre-igcse">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" style="background-color: #407c87;">
                    <div class="mb-2"><img src="@/assets/images/top-courses/top-course5.svg" alt=""></div>
                    <h4>Academic Eng 4 Skills</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/eng-4-skills"></router-link>
                <router-link class="view-btn" to="/course-detail/eng-4-skills">View Detail</router-link>
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
        text-align: center;
        padding: 50px 10% 40px;
        /* background: #f9f8f8; */
        background-image: linear-gradient(to top,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .top-course-container .top-course {
        width: 250px;
        height: 270px;
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

    .top-course img {
        width: 150px;
        margin-bottom: 20px;
    }

    .top-course h4, figcaption i {
        color: var(--main-text-color);
    }

    .top-courses figure {
        border-radius: 12px;
    }

    figure figcaption {
        /* margin-top: 7rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px !important;
        font-size: 12px;
    }

    .view-btn {
        display: none;
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

    @media (max-width:850px) {
        .section-header h2 {
            font-size: 1.5rem;
        }
    }

    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.2rem;
        }
        .view-btn {
            /* display: inline-block; */
            color: #fff;
            background: red;
            margin-top: -5rem;
        }
    }
</style>
