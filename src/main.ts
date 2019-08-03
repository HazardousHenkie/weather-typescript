import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import VueMoment from 'vue-moment'
import Round from './mixins/round'
import Fahrenheit from './mixins/fahrenheit'
import WeatherIcon from './mixins/weatherIcon'
import VueScrollTo from 'vue-scrollto'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueMoment)
Vue.use(Round)
Vue.use(Fahrenheit)
Vue.use(WeatherIcon)
Vue.use(VueScrollTo)

library.add(fas)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './styles/main.scss'

import router from './router'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
