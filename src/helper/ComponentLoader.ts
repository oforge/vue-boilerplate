import Vue, { AsyncComponent, VueConstructor } from 'vue';

/*
  This is a helper function that takes a "export default { VueComponent }" Object and registers the components globally.
  This is useful if you have components that are used globally, like form elements or page parts, that do not change (e.g. footer)
 */
// TODO: Check if the Types AsyncComponent and VueConstructor are correct
export default function loadComponents(components: {
  [key: string]: AsyncComponent | VueConstructor;
}) {
  const keys = Object.keys(components);
  for (const key of keys) {
    Vue.component(key, components[key]);
  }
}
