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
            <div class="menu pointer menu-parent">
                <div>Home</div>
                <div class="menu-child">
                    <router-link to="/contact-us">About us</router-link>
                    <a href="#">Contact</a>
                    <a href="#">Our Services</a>
                </div>
            </div>
            <div class="menu pointer menu-parent">
                Category
            </div>
            <div class="menu pointer">
                Blog
            </div>
            <div class="menu pointer">
                <router-link :to="{name: 'ContactUs'}">Contact</router-link>
            </div>
            <div class="menu pointer">Test</div>
            
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

    .navbar .menu {
        font-size: 1rem;
        margin-left: 2.5rem;
        transition: .2s;
    }

    .menu a {
        text-decoration: none;
        color: #fff;
    }

    .navbar .menu:hover {
        color: rgb(238,185,36);
        box-shadow: 0 0 1rem var(--main-bg-color);
        transform: scale(1.1);
    }

    .menu-parent {
        position: relative;
    }

    .menu-child a {
        text-decoration: none;
        color: #fff;
        line-height: 2rem;
        display: block;
        transition: .5s ease;
        font-size: .9rem;
    }

    .menu-child a:hover {
        border-bottom: solid 1px rgb(238,185,36);
    }

    .menu-child {
        display: none;
        position: absolute;
        background-color: #2b2e4d;
        padding: 10px 30px ;
        border-radius: 10px;
        min-width: 160px;
    }

    .menu-parent:hover .menu-child {
        display: block;
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
            font-size: 1rem;
        }

        .navbar {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 10px 3%;
            border-top: .1rem solid rgba(0,0,0,.2);
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
            display: none;
        }

        .navbar .menu {
            display: block;
            font-size: 1rem;
            margin: 2rem 0;
        }

        .navbar.active {
            display: block;
        }

    }
</style>
