import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import WelcomeView from '../views/welcomeView/WelcomeView.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import AuthBox from '@/components/auth/AuthBox.vue';
import DashboardView from '@/views/dashboardView/DashboardView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: WelcomeView,
        children: [
            {
                path: 'signIn',
                name: 'signIn',
                component: SignIn,
            },
            {
                path: 'signUp',
                name: 'signUp',
                component: SignUp,
            },
            {
                path: '',
                name: 'authBox',
                component: AuthBox,
            },
        ],
    },
    {
        path: '/dashboard',
        component: DashboardView,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
