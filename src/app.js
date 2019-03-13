import './css/index.css';
import Vue from 'vue';
import app from './compents/app.vue';
import router from './router'
import store from './store/index'

 

new Vue({
  el: '#app',
  render:c=>c(app),
  router,
  store
})
