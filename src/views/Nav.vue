<template>
    <nav class="nav1 sec-bg-color">
        <div class="container">
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
    <header class="header">
        <a href="#" class="logo"><img src="../assets/images/logo.png" alt=""></a>
        <i @click="isResponsive = !isResponsive" class='bx bx-menu' :class="{ 'bx-x' : isResponsive }" id="menu-icon"></i>
        <nav class="navbar" :class="{ 'active' : isResponsive }">
            <div class="menu pointer">Home</div>
            <div class="menu pointer">About</div>
            <div class="menu pointer">Contact</div>
            <div class="menu pointer">Test</div>
            <div class="dropdown">
                <button class="menu pointer dropdown-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script>
import { ref } from 'vue';
 
    export default {
        setup() {
            let isResponsive = ref(false);

            return {isResponsive}
        }
    }
</script>

<style scoped>
    .nav1 p {
        font-size: 12px;
        color: #fff;
    }

    .header{
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 55px;
        padding: 2rem 9%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background-color: var(--main-bg-color);
    }

    .navbar .menu{
        font-size: 1rem;
        margin-left: 2.5rem;
        transition: .5s;
        text-decoration: none;
        color: #fff;
    }

    .navbar .menu:hover {
        color: rgb(238,185,36);
        color: radial-gradient(circle, rgba(238,185,36,1) 0%, rgba(227,194,21,1) 45%);
        box-shadow: 0 0 1rem var(--main-bg-color);
        transform: scale(1.1);
    }

    .header img {
        width: 90px;
        height: 50px;
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
