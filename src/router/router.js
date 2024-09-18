
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import LoginForm from '../components/LoginForm.vue';

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/LoginForm',
        component:LoginForm,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router