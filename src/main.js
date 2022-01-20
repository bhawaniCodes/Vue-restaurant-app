import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid';
import router from './routes';
// import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(UUID);

new Vue({
  // vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
