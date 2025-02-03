import HomePage from './components/HomePage.vue';
import SignUp from './components/auth/SignUp.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'signup',
        component: SignUp,
        path: '/auth/register'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;