import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
import ContactView from "@/views/ContactView.vue";
import CinemasView from "@/views/CinemasView.vue";
import AboutView from "@/views/AboutView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/movies', component: MoviesView},
        {path: '/movieDetail', component: MovieDetailView},
        {path: '/cinemas', component: CinemasView},
        {path: '/contacts', component: ContactView},
        {path: '/about', component: AboutView}
    ],

    scrollBehavior(to, from, savedPosition) {
        if(to.path === '/movies' && from.path === '/cinemas') {
            return { top: 0 }
        }
        if(to.path === '/movies') {
            return savedPosition;
        }
        return { top: 0 }
    }
})