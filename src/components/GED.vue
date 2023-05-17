<template>
    <div>
        <div class="ged-section pb-4">
            <h3 class="mt-3 pt-5">GED Class</h3>
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
                <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div class="course-description">
                        <h6>Description</h6>
                        <p>
                            Our GED class is a comprehensive program designed to help individuals earn their General Education Development (GED) credential. Whether you didn't finish high school or want to enhance your educational qualifications, our class offers the support and resources you need to succeed. In our GED class, you will cover the four main subject areas of the GED test: Language Arts (Reading and Writing), Mathematics, Science, and Social Studies. Our experienced instructors will guide you through the curriculum, providing engaging lessons, practice exercises, and valuable test-taking strategies.
                        </p>
                    </div>
                    <div class="what-will-learn">
                        <h6>You'll Learn About</h6>
                        <ol>
                            <li>Language Arts (Reading and Writing):
                                <ul>
                                    <li>Improve reading comprehension by analyzing and interpreting various texts, including fiction and non-fiction.</li>
                                    <li>Enhance vocabulary development and understanding of word usage.</li>
                                    <li>Strengthen writing skills, including grammar, sentence structure, and essay writing.</li>
                                </ul>
                            </li>
                            <li>Mathematics
                                <ul>
                                    <li>Review and apply fundamental mathematical concepts, including arithmetic, algebra, and geometry.</li>
                                    <li>Develop problem-solving strategies for mathematical equations and word problems.</li>
                                    <li>Interpret and analyze data, graphs, and charts.</li>
                                </ul>
                            </li>
                            <li>Science:
                                <ul>
                                    <li>Understand scientific concepts and principles in areas such as biology, chemistry, and physics.</li>
                                    <li>Analyze and interpret scientific data, experiments, and research findings.</li>
                                    <li>Develop critical thinking skills by evaluating scientific arguments and hypotheses.</li>
                                </ul>
                            </li>
                            <li>Social Studies:
                                <ul>
                                    <li>Explore various topics in history, geography, civics, and economics.</li>
                                    <li>Gain knowledge of significant historical events, influential figures, and their impact on society.</li>
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
                <div class="col-lg-5 col-md-12 col-sm-12 col-12  ps-5">
                    <h6 class="text-center my-4">TUTION FEES & FINANCIAL AIDS</h6>
                    <div class="table-responsive">
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr>
                                    <td>Registration Fees</td>
                                    <td>50,000 MMK</td>
                                </tr>
                                <tr>
                                    <td>Material Fees</td>
                                    <td>200,000 MMk</td>
                                </tr>
                                <tr>
                                    <td>Tution Fees</td>
                                    <td>1,400,000 MMk</td>
                                </tr>
                                <tr>
                                    <td colspan="2">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>7 months (revision class included)</td>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .ged-section {
        text-align: center;
        margin: 0 auto 10px;
    }
    .ged-section img {
        width: 400px;
        height: 250px;
        margin: 15px auto;
    }
    .class-info {
        font-size: 12px;
        color: rgb(69, 69, 119);
    }
    .rating i {
        color: #f2ca2f;
    }
    .course-detail-section {
        padding: 10px 9%;
    }
    .course-description p {
        font-size: 12px;
        color: rgb(69, 69, 119);
        text-align: justify;
    }
    .what-will-learn ol>li, table ol>li{
        list-style: decimal;
        color: rgb(69, 69, 119);
        font-size: 14px;
    }
    .what-will-learn ul>li {
        list-style: circle;
        color: rgb(69, 69, 119);
        font-size: 12px;
    }
    table td, table ol>li, .table-responsive p {
        font-size: 12px;
    }
    table td {
        line-height: 30px;
        text-align: left;
    }
</style>

