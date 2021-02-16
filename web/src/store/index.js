import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Weather from '../components/Widget/WidgetServices/Weather/WeatherService.vue';
import Speedrun from "../components/Widget/WidgetServices/Speedrun/SpeedrunService.vue";
import Github from "../components/Widget/WidgetServices/Github/GithubService.vue";
import Lichess from "../components/Widget/WidgetServices/Lichess/LichessService.vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        user: {
            email: undefined,
            username: undefined,
            id: undefined,
            isLoggedIn: false,
        },
        githubCode: undefined,
        githubToken: undefined,
        subscribedServices: [],
        servicesList: {Weather, Speedrun, Github, Lichess},
        createdWidgets: [],
    },
    mutations: {
        login(state, firestoreUser) {
            state.user.email = firestoreUser.email;
            state.user.username = firestoreUser.displayName;
            state.user.id = firestoreUser.uid;
            state.user.isLoggedIn = true;
        },
        logout(state) {
            state.user.isLoggedIn = false;
        },
        setSubscribedServices(state, subscribedServices) {
            state.subscribedServices = subscribedServices
        },
        setServicesList(state, servicesList) {
            state.servicesList = servicesList;
        },
        setCreatedWidgets(state, createdWidgets) {
            state.createdWidgets = createdWidgets;
        },
        setGithubToken(state, token) {
            state.githubToken = token;
        },
        setGithubCode(state, code) {
            state.githubCode = code;
        }
    },
    getters: {
        user: state => state.user,
        email: state => state.user.email,
        githubCode: state => state.githubCode,
        githubToken: state => state.githubToken,
        isLoggedIn: state => state.user.isLoggedIn,
        subscribedServices: state => state.subscribedServices,
        servicesList: state => state.servicesList,
    }
});
