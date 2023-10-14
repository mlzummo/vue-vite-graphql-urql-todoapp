import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue"
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            component: () => './views/Login.vue', 
            // meta: { 
            //     layout: 'DefaultLayout'
            // }
        },
        // { 
        //     path: "/login", 
        //     component: Login, 
        //     meta: { 
        //         layout: DefaultLayout 
        //     }
        //  }
    ]
});

//todo create a layout for loggedin and not logged in

// /home vs /todo
