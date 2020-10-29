import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './components/Login';
import DashBoard from './components/Dashboard';
import Portals from './components/Portals';
import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/', component: LoginComponent },
  { path: '/portals', component: Portals },
  { path: '/dashboard', component: DashBoard }]

const router = new VueRouter({
  routes: routes
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
