import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue'
import Todos from './pages/Todos.vue'
import Weather from './pages/Weather.vue'
import Profile from './pages/Profile.vue'

const routes = [
    { path: '/', name:'dashboard', component: Dashboard },
    { path: '/todos',name:'todos', component: Todos },
    { path: '/weather',name:'weather', component: Weather },
    { path: '/profile',name:'profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;