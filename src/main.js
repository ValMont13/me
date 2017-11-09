// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueResource)
Vue.use(BootstrapVue)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
