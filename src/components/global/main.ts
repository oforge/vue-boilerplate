/*
  Here we define all globally usable components. Something like form elements or maybe icons.
  This object can be imported into the src/main.ts. There you can iterate over the objects and load them via vue.component(name, value)
 */
export default {
  "sample-component": () => import(/* webpackChunkName: "globalComponents" */"./SampleComponent.vue"),
};