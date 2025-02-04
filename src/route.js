import HomePage from './components/pages/HomePage.vue';
import SignUp from './components/pages/auth/SignUp.vue';
import SignIn from './components/pages/auth/SignIn.vue';
import AddResturant from './components/pages/AddResturant.vue';
import UpdateResturant from './components/pages/UpdateResturant.vue';
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
    {
        name: 'resturant.add',
        component: AddResturant,
        path: '/add-resturant'
    },
    {
        name: 'resturant.update',
        component: UpdateResturant,
        path: '/update-resturant/:id'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;