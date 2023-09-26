<template>
    <div class="videos">
        <div class="video-header">
            <span>RIHEA VIDEOS</span>
            <h2>ALL RESOURCE TO HELP YOU INDEED</h2>
        </div>
        <div class="tab shadow">
            <div @click="current_tab = 'school'" :class="{active: current_tab == 'school'}">School</div>
            <div @click="current_tab = 'student'" :class="{active: current_tab == 'student'}">Students</div>
        </div>
        <div class="video-wraper" v-if="current_tab == 'school'" >
            <div class="video-card" v-for="(video,i) in school_videos" :key="i">
                <div class="video">
                    <video controls >
                        <source :src="video.src">
                    </video>
                </div>
                <div class="content">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <div class="title">
                        <h2>{{video.title}}</h2>
                        <p>{{video.intro}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-wraper" v-else >
            <div class="video-card" v-for="(video,i) in stu_videos" :key="i">
                <div class="video">
                    <video controls >
                        <source :src="video.src">
                    </video>
                </div>
                <div class="content">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <div class="title">
                        <h2>{{video.title}}</h2>
                        <p>{{video.intro}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup() {
            let current_tab = ref('school');

            let stu_videos = [
                {
                    src: require("@/assets/videos/greeting.mp4"),
                    title: "𝐎𝐮𝐫 𝐕𝐚𝐥𝐮𝐚𝐛𝐥𝐞 𝐑𝐈𝐇𝐄𝐀𝐢𝐚𝐧𝐬 💎",
                    intro: "𝖫𝖾𝖺𝗋𝗇𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗎𝗌，𝗆𝗈𝗏𝗂𝗇𝗀 𝗍𝗈 𝖺 𝖻𝗋𝗂𝗀𝗁𝗍𝖾𝗋 𝖿𝗎𝗍𝗎𝗋𝖾！"
                },
            ];

            let school_videos = [
                {
                    src: require("@/assets/videos/science.mp4"),
                    title: "𝐆𝐄𝐃 𝐋𝐢𝐟𝐞 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐒𝐮𝐛𝐣𝐞𝐜𝐭 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧",
                    intro: "GED ရဲ့ science subject ထဲက Life Science အပိုင်းမှာ သင်ကြားရမယ့် Chapter တွေအကြောင်းကို ဆရာမထက်ထက်က အကျဉ်းချုပ် ဝေမျှပေးသွားတာပဲဖြစ်ပါတယ်။"
                },
                {
                    src: require("@/assets/videos/math.mp4"),
                    title: "How to find the value of slope",
                    intro: "Line တွေ အကြောင်း လေ့လာ မယ် ဆိုရင် slope, intercept တို့ inequality တို့ဆိုတာ မပါ မဖြစ်ပါပဲ။ အမှတ်၂ မှတ်ပေါ်မှာ မူ တည်ပြီး တော့ slope တန်ဖိုးလေး ကို ဘယ်လို ရှာလဲ ဆိုတာကတော့ video ‌လေးမှာ ကြည့်ရှု့လေ့လာနိုင်ပါတယ်။"
                },
            ];

            return {stu_videos, school_videos, current_tab}
        }
    }
</script>

<style scoped>
    .videos {
        padding: 30px 15.5%;
    }

    .video-header {
        text-align: center;
        padding: 30px 0 50px;
    }

    .video-header h2 {
        font-weight: bold;
    }

    .videos .tab {
        display: inline-flex;
        margin: 30px 0;
        border-radius: 100px;
        background: rgb(255, 255, 255);
        overflow: hidden;
    }

    .videos .tab div {
        margin-right: 0px;
        padding: 10px 30px;
        cursor: pointer;
        transition: .5s ease-out;
        margin: 10px 5px 10px 10px;
        border-radius: 100px;
    }

    .videos .tab .active {
        background: #e6eef9;
        color: #185ee0;
        font-weight: bold;
    }

    .video-wraper {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        padding-left: 10px;
    }

    .video-card {
        width: 24%;
        margin-bottom: 30px;
    }

    .video-card video {
        width: 100%;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    .video-card .content {
        display: flex;
        gap: 10px;
    }


    .video-card .logo img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: contain;
    }

    .video-card .title h2 {
        font-size: 16px;
        font-weight: bold;
    }

    .video-card .title p {
        font-size: 12px;
        text-align: justify;
    }

    @media (max-width: 1500px) {
        .videos {
            padding: 30px 9%;
        }
    }

    @media (max-width: 1200px) {
        .video-card {
            width: 32%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 990px) {
        .video-card {
            width: 48%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 850px) {
        .videos {
            padding: 30px 3%;
        }
        .video-header {
            text-align: center;
            padding: 30px 0 50px;
            margin-top: 40px;
        }

        .video-header h2 {
            font-size: 23px;
        }
    }

    @media (max-width: 500px) {
        .video-header span {
            font-size: 12px;
        }
        .video-header h2 {
            font-size: 18px;
        }

        .videos .tab {
            margin: 20px 0;
        }
    
        .videos .tab div {
            padding: 5px 20px;
            cursor: pointer;
            transition: .5s ease-out;
            margin: 10px 5px 10px 10px;
            border-radius: 100px;
            font-size: 12px;
        }
    
        .video-card {
            width: 95%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 400px) {
        .video-header h2 {
            font-size: 16px;
        }
    }
</style>
