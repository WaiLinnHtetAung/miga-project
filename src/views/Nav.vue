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
    <header class="header main-bg">
        <div class="d-flex justify-content-center align-items-center pointer" @click="goHome">
            <router-link to="/"><img src="../assets/images/logo.svg" alt=""></router-link>
            <div class="mt-3">
                <span class="fw-bold">RIHEA</span>
                <p style="font-size:12px;">Education Center</p>
            </div>
        </div>
        <i @click="isResponsive = !isResponsive" class='bx bx-menu' :class="{ 'bx-x' : isResponsive }" id="menu-icon"></i>
        <nav class="navbar" :class="{ 'active' : isResponsive }">
            <ul>
                <li class="dropdown">
                    <a href="">Home <i class='bx bx-chevron-down'></i></a>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Our Services</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="">Category <i class='bx bx-chevron-down'></i></a>
                    <ul>
                        <li><a href="">Cat 1</a></li>
                        <li><a href="">Cat 2</a></li>
                        <li><a href="">Cat 3</a></li>
                    </ul>
                </li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
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
        font-size: 16px;
        color: #fff;
        white-space: nowrap;
        transition: 0.3s;
        text-transform: uppercase;
        font-weight: 500;
        text-decoration: none;
    }

    .navbar a i, 
    .navbar a:focus i {
        font-size: 16px;
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
        background: rgb(74, 39, 106);
        border-bottom: 5px solid #e9b313;
        box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
    }

    .navbar .dropdown ul li {
        min-width: 200px;
    }

    .navbar .dropdown ul a {
        padding: 10px 20px;
        text-transform: none;
    }

    .navbar .dropdown ul a:hover {
        color: #e9b313;
    }

    .navbar .dropdown:hover>ul {
        opacity: 1;
        visibility: visible;
        top: 100%;
    }

    .nav1 {
        height: 35px;
        padding:0 9%;
    }
    .nav1 p {
        font-size: 12px;
        color: #fff;
    }

    .header{
        position: sticky;
        top: 0;
        width: 100%;
        height: 55px;
        padding: 2rem 7.8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }


    .header img {
        width: 100%;
        height: 70px;
        border-radius: 12px;
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
