<template>
    <div class="pre-ged-section pb-4 ">
        <h3 class="mt-3 pt-5">Pre GED Class</h3>
        <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <img src="../assets/images/usa-flag-american.gif" alt="">
        <div class="d-flex justify-content-center align-items-center gap-5" >
            <div class="class-info"><i class="fa-solid fa-clock me-2"></i>10 months</div>
            <div class="class-info"><i class="fa-solid fa-users"></i> 500 students enrolled</div>
        </div>
    </div>
    <hr>
    <div class="course-detail-section">
        <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 col-12 p-sm-0">
                <div class="course-description">
                    <h6>Description</h6>
                    <p>
                        Our Pre-GED class is a comprehensive educational program designed to help individuals who have not completed high school prepare for the General Education Development (GED) test. Our experienced instructors are committed to supporting students on their journey towards obtaining their GED credential. Through engaging lessons, personalized attention, and a supportive learning environment, we aim to equip students with the knowledge, skills, and confidence necessary to succeed in the GED exam.
                    </p>
                </div>
                <div class="what-will-learn">
                    <h6>You'll Learn About</h6>
                    <ol>
                        <li>Language Arts (Reading and Writing):
                            <ul>
                                <li>Improve reading comprehension skills by analyzing and interpreting various texts.</li>
                                <li>Enhance vocabulary development and understanding of word usage.</li>
                                <li>Strengthen writing skills by practicing essay writing, grammar, and sentence structure.</li>
                            </ul>
                        </li>
                        <li>Mathematics
                            <ul>
                                <li>Review and apply fundamental mathematical concepts, including arithmetic, algebra, and geometry.</li>
                                <li>Develop problem-solving strategies for mathematical equations and word problems.</li>
                                <li>Improve skills in interpreting data, graphs, and charts.</li>
                            </ul>
                        </li>
                        <li>Science:
                            <ul>
                                <li>Understand scientific concepts and principles in areas such as biology, chemistry, and physics.</li>
                                <li>Analyze and interpret scientific data and experiments.</li>
                                <li>Develop critical thinking skills by evaluating scientific arguments and hypotheses.</li>
                            </ul>
                        </li>
                        <li>Social Studies:
                            <ul>
                                <li>Explore various topics in history, geography, civics, and economics.</li>
                                <li>Gain knowledge of significant historical events, influential figures, and their impacts on society.</li>
                                <li>Analyze primary and secondary sources to develop a deeper understanding of social studies concepts.</li>
                            </ul>
                        </li>
                        <li>Test-Taking Strategies:
                            <ul>
                                <li>Learn effective strategies for approaching different question types in the GED test.</li>
                                <li>Practice time management techniques to ensure you complete the test within the allotted time.</li>
                                <li>Enhance your ability to identify key information and eliminate incorrect answer choices.</li>
                            </ul>
                        </li>
                        <li>Study Skills and Test Preparation:
                            <ul>
                                <li>Develop effective study habits and techniques to maximize your learning potential.</li>
                                <li>Learn how to organize study materials, create study schedules, and set achievable goals.</li>
                                <li>Practice with sample GED test questions and full-length practice exams to familiarize yourself with the test format and assess your progress.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-12  ps-5 table-header">
                <h6 class="text-center">TUTION FEES & FINANCIAL AIDS</h6>
                <div class="table-responsive">
                    <table class="table table-sm table-striped">
                        <tbody>
                            <tr>
                                <td>Registration Fees</td>
                                <td>50,000 MMK</td>
                            </tr>
                            <tr>
                                <td>Material Fees</td>
                                <td>150,000 MMk</td>
                            </tr>
                            <tr>
                                <td>Tution Fees</td>
                                <td>2,000,000 MMk</td>
                            </tr>
                            <tr>
                                <td colspan="2">&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>10 months (intensive class included)</td>
                            </tr>
                            <tr>
                                <td>Avaliable Subjects</td>
                                <td>
                                    <ol>
                                        <li>Reasoning through Language arts(RLA)</li>
                                        <li>Mathematical Reasoning</li>
                                        <li>Science</li>
                                        <li>Social Studies</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>Time-Table</td>
                                <td>
                                    2 days (or) 5 days per week <br>
                                    9:00 AM to 3:30 PM
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="text-danger">*You can pay your tution fees by monthly.(200,000 MMK)*</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .pre-ged-section {
        text-align: center;
        margin: 10px auto;
    }
    .pre-ged-section img {
        width: 400px;
        height: 250px;
        margin: 15px auto;
    }
    .class-info {
        font-size: 14px;
        color: rgb(69, 69, 119);
    }
    .rating i {
        color: #f2ca2f;
    }
    .course-detail-section {
        padding: 40px 15%;
    }

    .course-description h6 {
        margin: 40px auto 10px;
    }
    .course-description p {
        font-size: 14px;
        line-height: 30px;
        color: rgb(69, 69, 119);
        text-align: justify;
    }
    .what-will-learn ol>li, table ol>li{
        list-style: decimal;
        color: rgb(69, 69, 119);
        font-size: 14px;
        line-height: 30px;
    }
    .what-will-learn ul>li {
        list-style: circle;
        color: rgb(69, 69, 119);
        font-size: 14px;
    }
    table td, table ol>li, .table-responsive p {
        font-size: 14px;
    }
    table td {
        line-height: 30px;
        text-align: left;
        padding-left: 30px;
    }

    .table-header h6 {
        margin: 30px auto;
    }

    @media (max-width: 1500px) {
        .class-info {
            font-size: 12px;
            color: rgb(69, 69, 119);
        }

        .course-detail-section {
            padding: 10px 9%;
        }
    
        .course-description p {
            font-size: 12px;
            line-height: 20px;
        }

        .what-will-learn ol>li, table ol>li{
            font-size: 12px;
            line-height: 30px;
        }
        .what-will-learn ul>li {
            font-size: 12px;
        }
        table td, table ol>li, .table-responsive p {
            font-size: 12px;
        }
        table td {
            line-height: 20px;
            text-align: left;
            padding: 10px 0px 10px 30px;
        }
    }
    
    @media (max-width:990px) {
        .table-header {
            padding: 0 !important;
        }
    }

    @media (max-width:450px) {
        .pre-ged-section img {
            width: 300px;
            height: 200px;
            margin: 15px auto;
        }
       
    }
</style>
