import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('auth');
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
