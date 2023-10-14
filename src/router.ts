import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: App },
        { path: "/login", component: Login, meta: { layout: 'AuthLayout', }, }
    ]
});

//todo create a layout for loggedin and not logged in

// /home vs /todo
