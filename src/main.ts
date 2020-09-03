import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/*
  Here we inject the global components and load them with a helper function
 */
import globalComponents from '@/components/global/main';
import loadComponents from '@/helper/ComponentLoader';

loadComponents(globalComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
