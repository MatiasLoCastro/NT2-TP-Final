import Vue from 'vue'
import App from './App.vue'

import "popper.js"
import "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./form"
import { router } from "./router"
import "./axios"
import store from './store'
import './globalMixins'
import './globalfilters'



Vue.config.productionTip = false

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')
