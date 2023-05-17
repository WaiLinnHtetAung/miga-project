<template>
    <nav class="nav1 top-bg-color">
        <div class="">
            <div class="d-flex me-3">
                <div class="email d-flex pt-2 me-3">
                    <i class='bx bx-envelope me-2 fs-6' ></i> 
                    <p class="">example.com</p>
                </div>

                <div class="phone d-flex pt-2">
                    <i class='bx bx-phone me-2 fs-6'></i>
                    <p>09-xxxxxxxxx</p>
                </div>
            </div>
        </div>
    </nav>
    <header class="header main-bg shadow">
        <div class="d-flex justify-content-center align-items-center pointer" @click="goHome">
            <router-link to="/"><img src="@/assets/images/logo.png" alt=""></router-link>
            <div class="mt-3 ms-2">
                <p style="font-size:12px;"><span style="font-weight: bold; font-size:12px;">RIHEA</span><br> Education Center</p>
            </div>
        </div>
        <i @click="isResponsive = !isResponsive" class='bx bx-menu' :class="{ 'bx-x' : isResponsive }" id="menu-icon"></i>
        <nav class="navbar" :class="{ 'active' : isResponsive }">
            <ul>
                <li class="dropdown">
                    <a href="">Home <i class='bx bx-chevron-down'></i></a>
                    <ul>
                        <li><router-link to="/about-us">About Us</router-link></li>
                        <li><router-link to="/contact-us">Contact Us</router-link></li>
                        <li><a href="">Our Services</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="">Courses <i class='bx bx-chevron-down'></i></a>
                    <ul>
                        <li><router-link :to="{name: 'CourseDetail', params: {slug: 'pre-ged'}}">Pre GED</router-link></li>
                        <li><router-link to="/course-detail/ged">GED</router-link></li>
                        <li><router-link to="/course-detail/pre-igcse">Pre IGCSE</router-link></li>
                        <li><router-link to="/course-detail/o-igcse">O Level IGCSE</router-link></li>
                        <li><router-link to="/course-detail/eng-4-skills">Eng 4 Skills</router-link></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="">Campuses <i class='bx bx-chevron-down'></i></a>
                    <ul>
                        <li><router-link to="/campus/campus1">Campus 1</router-link></li>
                        <li><router-link to="/campus/campus2">Campus 2</router-link></li>
                        <li><router-link to="/campus/campus3">Campus 3</router-link></li>
                        <li><router-link to="/campus/campus4">Campus 4</router-link></li>
                        <li><router-link to="/campus/campus5">Campus 5</router-link></li>
                        <li><router-link to="/campus/campus6">Campus 6</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/all-blogs">Blog</router-link></li>
            </ul>
            
        </nav>
    </header>

</template>

<script>
    import { ref } from 'vue';
    import {useRouter} from 'vue-router'

    export default {
        setup() {
            let router = useRouter();
            let isResponsive = ref(false);
            let goHome = () => router.push('/');
            

            return {isResponsive, goHome}
        }
    }
</script>

<style scoped>
    .navbar ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;
    }

    .navbar li {
        position: relative;
    }

    .navbar a,
    .navbar a:focus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 10px 30px;
        font-size: 13px;
        color: #403174;
        white-space: nowrap;
        transition: 0.3s;
        text-transform: uppercase;
        font-weight: 500;
        text-decoration: none;
    }

    .navbar a i, 
    .navbar a:focus i {
        font-size: 13px;
        line-height: 0;
        margin-left: 5px;
    }

    .navbar a:hover,
    .navbar a:hover i {
        color: #e9b313;
    }

    .navbar .dropdown ul {
        display: block;
        position: absolute;
        left: 14px;
        top: calc(100% + 30px);
        margin: 0;
        padding: 10px 0;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        background: #23085a;
        border-bottom: 5px solid #e9b313;
        box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
    }

    .navbar .dropdown ul li {
        min-width: 150px;
    }

    .navbar .dropdown ul a {
        padding: 10px 15px 5px;
        text-transform: none;
    }

    .navbar .dropdown ul a {
        color: #fff;
    }

    .navbar .dropdown ul a:hover {
        color:#e9b313;
    }

    .navbar .dropdown:hover>ul {
        opacity: 1;
        visibility: visible;
        top: 100%;
    }

    .nav1 {
        height: 25px;
        padding:10px 6.7% 0px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .nav1 p {
        font-size: 13px;
        color: #f2ca2f;
    }

    .email i, .phone i {
        color: #f2ca2f;
    }

    .header{
        position: sticky;
        top: 0;
        width: 100%;
        height: 45px;
        padding: 1.9rem 7.8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background-color: #eee !important;
    }


    .header img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .router-link-active {
        color: rgb(238,185,36) !important;
    }

    #menu-icon {
        font-size: 3rem;
        color: var(--text-color);
        display: none;
    }

    @media (max-width:850px) {
        #menu-icon {
            display: block;
            font-size: 1.5rem;
        }

        .navbar {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 0 9% 0 3%;
            border-top: .1rem solid rgba(0,0,0,.2);
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
            display: none;
            background: #2b2e4d;
        }

        .navbar.active {
            display: block;
        }

        .navbar ul {
            display: block;
            font-size: 1rem;
            margin: 2rem 0;
            padding-left: 20px;
        }

        .navbar .dropdown ul {
            display: block;
            position: static;
            left: 30;
            top: calc(100% + 30px);
            margin-left: 20px;
            padding: 10px 0;
            z-index: 99;
            display: none;
            background: rgb(74, 39, 106);
            box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
        }

        .navbar .dropdown ul li a:hover {
            color: #e9b313;
        }

        .navbar .dropdown:hover>ul {
            display: block;
            top: 100%;
        }
    }
</style>
