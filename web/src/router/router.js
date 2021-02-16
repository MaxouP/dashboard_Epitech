import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store';
import LoginPage from '../views/LoginPage.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: (to, from, next) => {
                if (!store.getters.isLoggedIn)
                    return next();
                return next(false);
            }
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import(/*webpackChunkName: 'registration'*/"../views/Registration"),
            beforeEnter: (to, from, next) => {
                if (!store.getters.isLoggedIn)
                    return next();
                return next(false);
            }
        },
        {
            path: '/',
            name: 'home',
            component: () => import(/*webpackChunkName: 'home'*/"../views/Home"),
            beforeEnter: (to, from, next) => {
                if (store.getters.isLoggedIn)
                    return next();
                return next('/login');
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/*webpackChunkName: 'profile'*/"../views/Profile"),
            beforeEnter: (to, from, next) => {
                if (store.getters.isLoggedIn)
                    return next();
                return next('/login');
            }
        },
        {
            path: '/about.json',
            name: 'about.json',
            component: () => import(/*webpackChunkName: 'about.json'*/"../views/About"),
        },
    ]
})