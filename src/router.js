import Vue from 'vue';
import login from './compents/login.vue';
import reg from './compents/reg.vue';
import VueRouter from 'vue-router';

 Vue.use(VueRouter)

const routes = [
  { path: '/login', component: login },
  { path: '/reg', component: reg }
]

const router = new VueRouter({
  routes 
})

export default router;