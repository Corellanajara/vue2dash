import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CardCustom from './components/CardCustom'
import Chart from './components/CardCustom'
import HelloWorld from './components/CardCustom'
import AreaExample from './charts/AreaExample'
import BarExample from './charts/BarExample'
import ColumnExample from './charts/ColumnExample'
import ScatterExample from './charts/ScatterExample'
import MixedExample from './charts/MixedExample'
import DonutExample from './charts/DonutExample'
import RadialBarExample from './charts/RadialBarExample'
import BubbleExample from './charts/BubbleExample'
import HeatmapExample from './charts/HeatmapExample'
import LineExample from './charts/LineExample'
import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts)
Vue.component('HelloWorld',HelloWorld)
Vue.component('Chart',Chart)
Vue.component('CardCustom',CardCustom)


Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: '/area', component: AreaExample },
  { path: '/bar', component: BarExample },
  { path: '/column', component: ColumnExample },
  { path: '/mixed', component: MixedExample },
  { path: '/scatter', component: ScatterExample },
  { path: '/donut', component: DonutExample },
  { path: '/radialbar', component: RadialBarExample },
  { path: '/bubble', component: BubbleExample },
  { path: '/heatmap', component: HeatmapExample },
  { path: '/line', component: LineExample }
]

const router = new VueRouter({
  routes: routes
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
