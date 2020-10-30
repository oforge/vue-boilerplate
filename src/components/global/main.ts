/*
  Here we define all globally usable components. Something like form elements or maybe icons.
  This object can be imported into the src/main.ts. There you can iterate over the objects and load them via vue.component(name, value)
 */
import Vue from 'vue';

export default class GlobalComponentLoader extends Vue {
  bootstrap() {
    console.log('call');
    Vue.component('spk-icon', () => import(/* webpackChunkName: "globalComponents" */ './SpkIcon.vue'));
    Vue.component('spk-button', () => import(/* webpackChunkName: "globalComponents" */ './forms/SpkButton.vue'));
    Vue.component('spk-text', () => import(/* webpackChunkName: "globalComponents" */ './forms/SpkText.vue'));
    Vue.component('spk-number', () => import(/* webpackChunkName: "globalComponents" */ './forms/SpkNumber.vue'));
    Vue.component('spk-checkbox', () => import(/* webpackChunkName: "globalComponents" */ './forms/SpkCheckbox.vue'));
    Vue.component('spk-radio', () => import(/* webpackChunkName: "globalComponents" */ './forms/SpkRadio.vue'));
    Vue.component('spk-modal', () => import(/* webpackChunkName: "globalComponents" */ './SpkModal.vue'));
    Vue.component('spk-notification', () => import(/* webpackChunkName: "globalComponents" */ './notification/SpkNotification.vue'));
    Vue.component('spk-loader', () => import(/* webpackChunkName: "globalComponents" */ './SpkLoader.vue'));
    Vue.component('spk-sprite', () => import(/* webpackChunkName: "globalComponents" */ './SpkSprite.vue'));
  }
}
