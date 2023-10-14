import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";
// import App from "./App.vue";
import Login from "../components/Login.vue";
import Todo from "../components/Todo.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";


const routes: Array<RouteRecordRaw> = [
        // { 
        //     path: "/", 
        //     component: () => './components/Login.vue', 
        //     // meta: { 
        //     //     layout: 'DefaultLayout'
        //     // }
        // },
        // { 
        //     path: "/login", 
        //     component: () => './components/Login.vue', 
        //     // meta: { 
        //     //     layout: 'DefaultLayout'
        //     // }
        // },
        { 
            path: "/login", 
            component: Login, 
            meta: { 
                layout: DefaultLayout 
            }
         },
         { 
            path: "/todo", 
            component: Todo, 
            meta: { 
                layout: DefaultLayout 
            }
         }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});

//todo create a layout for loggedin and not logged in

// /home vs /todo
