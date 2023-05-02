<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dropdown-btn {
  border: 0;
  background-color: transparent;
}

.dropdown-menu {
  background-color: aliceblue;
}

.section-header h2{
    text-align: center;
    color: rgb(238,185,36);
    color: radial-gradient(circle, rgba(238,185,36,1) 0%, rgba(227,194,21,1) 45%, rgba(105,98,19,1) 100%);
  }

  .btn {
    background: rgb(238,185,36);
    background: radial-gradient(circle, rgba(238,185,36,1) 0%, rgba(227,194,21,1) 45%);
    color: #1d203e;
    border-radius: 12px;
  }

  .pointer {
    cursor: pointer;
  }

</style>
