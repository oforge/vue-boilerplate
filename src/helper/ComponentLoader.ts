import Vue, { AsyncComponent, VueConstructor } from "vue";

// TODO: Check if the Types AsyncComponent and VueConstructor are correct
export default function loadComponents(components: { [key: string]: AsyncComponent | VueConstructor}) {
  const keys = Object.keys(components);
  for (const key of keys) {
    Vue.component(key, components[key]);
  }
}
