import Vue from 'vue';
import Vuex from 'vuex';
import notificationModule from './modules/notifications';
import deviceModule from '@/store/modules/device';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notificationModule,
    deviceModule
  }
});
