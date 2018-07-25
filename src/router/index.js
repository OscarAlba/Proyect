import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Vista1 from '../components/Vista1.vue'
import Vista2 from '../components/Vista2.vue'

Vue.use(VueRouter)

export const routes = [

  {
    path: '/Vista1',
    name: '/Vista1',
    component: Vista1
  },

  {
    path: '/Vista2',
    name: '/Vista2',
    component: Vista2

  }


];
