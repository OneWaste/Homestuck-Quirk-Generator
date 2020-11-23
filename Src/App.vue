<template>
<div class="main-nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
</div>
<router-view />
</template>

<style>
/* stylelint-disable selector-max-id */

/* noinspection CssUnusedSymbol */
#app {
    background-position: top left;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
}
/* stylelint-enable selector-max-id */

.main-nav {
    padding: 30px;
}

.main-nav a {
    font-weight: bold;
    color: #2C3E50;
}

.main-nav a.router-link-exact-active {
    color: #42B983;
}
</style>
