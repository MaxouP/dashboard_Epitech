<template>
    <div id="app">
        <v-app>
            <Navbar v-if="this.$store.getters.isLoggedIn" />
            <router-view />
        </v-app>
    </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
    components: {
        Navbar,
    },
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    min-height: 100vh;
    background-size: cover;
    color: #2c3e50;
    background-color: #eee;
    background-size: cover;
}
</style>
