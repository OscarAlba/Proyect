import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import {routes } from './router/index'
import BookBlock from 'vue-bookblock'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueImg from 'v-img';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BookBlock)
Vue.use(VueImg);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
