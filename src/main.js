import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/fontawesome/css/all.css'
import './assets/css/normalize.css';
import './assets/css/style.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
