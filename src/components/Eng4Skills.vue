<template>
    <div class="eng-skills-section pb-4 ">
        <h3 class="mt-3 pt-5">ACADEMIC ENGLISH 4 SKILLS</h3>
        <div class="rating mb-4">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <img src="../assets/images/eng-skills.svg" alt="">
        <div class="d-flex justify-content-center align-items-center gap-5" >
            <div class="class-info"><i class="fa-solid fa-clock me-2"></i>4 months</div>
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
                        Academic English focuses on developing proficiency in four key language skills: reading, writing, listening, and speaking. These skills are essential for success in academic settings, as they enable students to comprehend complex texts, express ideas effectively, engage in discussions, and communicate their thoughts clearly.
                    </p>
                </div>
                <div class="what-will-learn">
                    <h6>You'll Learn About</h6>
                    <ol>
                        <li>
                            Reading: Academic English emphasizes reading comprehension and critical analysis of various types of texts, including articles, essays, research papers, and literary works. Students learn to extract key information, identify main ideas, understand nuances, and evaluate arguments. Vocabulary expansion and understanding academic language structures are also integral to enhancing reading skills.
                        </li>
                        <li>
                            Writing: Developing strong writing skills is crucial for academic success. Students learn to organize ideas, structure essays, and express thoughts coherently. They develop proficiency in academic writing styles, such as argumentative, persuasive, and expository writing. Attention is given to grammar, punctuation, and appropriate language usage. Students also learn to conduct research, gather evidence, and incorporate citations to support their arguments.
                        </li>
                        <li>
                            Listening: Academic English emphasizes effective listening skills to comprehend lectures, presentations, and academic discussions. Students learn to identify main ideas, follow complex arguments, and take relevant notes. Active listening strategies, such as predicting, summarizing, and clarifying, are emphasized to enhance comprehension.
                        </li>
                        <li>
                            Speaking: The ability to express ideas orally and engage in academic discussions is vital. Academic English focuses on developing fluency, clarity, and coherence in spoken language. Students practice presenting ideas, participating in debates, expressing opinions, and responding critically to others' viewpoints. Pronunciation, intonation, and effective communication strategies are also honed.
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
                                <td>100,000 MMk</td>
                            </tr>
                            <tr>
                                <td>Tution Fees</td>
                                <td>280,000 MMk</td>
                            </tr>
                            <tr>
                                <td colspan="2">&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>4 months (placement-test required)</td>
                            </tr>
                            <tr>
                                <td>Time-Table</td>
                                <td>
                                    2 days per week <br>
                                    9:00 AM to 3:30 PM
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="text-danger">*You can pay your tution fees by monthly.(70,000 MMK)*</p>
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
    .eng-skills-section {
        text-align: center;
        margin: 10px auto;
    }
    .eng-skills-section img {
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
    .what-will-learn ol>li {
        list-style: circle;
        color: rgb(69, 69, 119);
        font-size: 12px;
        margin-bottom: 10px;
    }
    table td, .table-responsive p {
        font-size: 12px;
    }
    table td {
        text-align: left;
        line-height: 30px;
    }
</style>
