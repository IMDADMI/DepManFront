import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


import router from './router'
import "bootstrap/dist/js/bootstrap.js"
