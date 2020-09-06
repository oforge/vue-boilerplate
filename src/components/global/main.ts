/*
  Here we define all globally usable components. Something like form elements or maybe icons.
  This object can be imported into the src/main.ts. There you can iterate over the objects and load them via vue.component(name, value)
 */
import OtherSampleComponent from '@/components/global/OtherSampleComponent.vue';
import Vue from 'vue';

export default class GlobalComponentLoader extends Vue {
  bootstrap() {
    console.log('call');
    Vue.component('base-icon', () =>
      import(/* webpackChunkName: "globalComponents" */ './BaseIcon.vue')
    );
    Vue.component('base-button', () =>
      import(/* webpackChunkName: "globalComponents" */ './forms/BaseButton.vue')
    );
    Vue.component('base-input', () =>
      import(/* webpackChunkName: "globalComponents" */ './forms/BaseInput.vue')
    );
  }
}
