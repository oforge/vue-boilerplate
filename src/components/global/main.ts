/*
  Here we define all globally usable components. Something like form elements or maybe icons.
  This object can be imported into the src/main.ts. There you can iterate over the objects and load them via vue.component(name, value)
 */
import SampleComponent from '@/components/global/OtherSampleComponent.vue';
import { VueConstructor } from 'vue';

export default {
  "sample-component": () => import(/* webpackChunkName: "globalComponents" */"./SampleComponent.vue"),
  "other-sample-component": SampleComponent as VueConstructor,
  "icon": () => import(/* webpackChunkName: "globalComponents" */"./Icon.vue"),
  "app-button": () => import(/* webpackChunkName: "globalComponents" */"./forms/AppButton.vue"),
};