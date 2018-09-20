import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

//JS
window.jQuery = jQuery;
window.$ = $;
import bootstrap from 'bootstrap';
import './assets/js/frontend.js';

//CSS
import 'font-awesome/css/font-awesome.css';
import './assets/scss/app.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
