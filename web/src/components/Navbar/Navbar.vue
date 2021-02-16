<template>
    <v-card style="border-top-left-radius: 0em; border-top-right-radius: 0em">
        <v-card-title class="navbarContainer">
            <div style="cursor: pointer" @click="goToHome">
                <img src="../../assets/DashboardLogo.png" width="120" />
            </div>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="#eee">mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list class="menu">
                    <v-btn text to="/profile"> <v-icon>mdi-account</v-icon>Profile</v-btn>
                    <v-btn text @click="logout"> <v-icon>mdi-logout</v-icon>Logout</v-btn>
                </v-list>
            </v-menu>
        </v-card-title>
    </v-card>
</template>

<script>
import firebase from "../../config/index.js";

export default {
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        async logout() {
            await firebase.auth().signOut();
            this.$store.commit("logout");
            this.$router.push("/login");
        },
    },
};
</script>

<style>
.navbarContainer {
    background-color: #1e3888;
    color: white;
}

.menu {
    display: flex !important;
    flex-direction: column;
}
</style>
