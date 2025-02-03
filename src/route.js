import HomePage from './components/HomePage.vue';
import SignUp from './components/auth/SignUp.vue';
import SignIn from './components/auth/SignIn.vue';
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
    },
    {
        name: 'signin',
        component: SignIn,
        path: '/auth/login'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;