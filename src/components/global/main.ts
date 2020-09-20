/*
  Here we define all globally usable components. Something like form elements or maybe icons.
  This object can be imported into the src/main.ts. There you can iterate over the objects and load them via vue.component(name, value)
 */
import Vue from 'vue';

export default class GlobalComponentLoader extends Vue {
  bootstrap() {
    console.log('call');
    Vue.component('spk-icon', () =>
      import(/* webpackChunkName: "globalComponents" */ './SpkIcon.vue')
    );
    Vue.component('spk-button', () =>
      import(/* webpackChunkName: "globalComponents" */ './forms/SpkButton.vue')
    );
    Vue.component('spk-input', () =>
      import(/* webpackChunkName: "globalComponents" */ './forms/SpkInput.vue')
    );
    Vue.component('spk-modal', () =>
      import(/* webpackChunkName: "globalComponents" */ './SpkModal.vue')
    );
  }
}
