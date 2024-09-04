
import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue';
import Home from '../components/Home.vue';
// import ViewCustomer from '../components/ViewCustomer.vue';

const routes = [
    {
        path:'/',
        component:Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})




export default router