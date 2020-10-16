import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Scanning from '@/components/Scanning.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/scanning',
    component: Scanning
  },
  // {
  //   path: '/scanner',
  //   component: Scanner
  // },
];

const router = new VueRouter({
  routes
});

export default router;
