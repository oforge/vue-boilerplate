import Vue from "vue";

export default function loadComponents(components: {}) {
  const keys = Object.keys(components);
  for (const key of keys) {
    Vue.component(key, (components as any)[key]);
  }
}
