import Vue from 'vue';
import { store } from './store';
import App from './App.vue'
import router from './router/router'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store
}).$mount('#app')
