<template>
  <div id="app">
    <div class="test m-v-xxl">
      This is a test
    </div>
    <h2>This is h2</h2>
    <stage></stage>
    <sample-component></sample-component>
    <other-sample-component></other-sample-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Stage from "@/components/Stage.vue";

@Component({
  components: {
    Stage
  }
})
export default class App extends Vue {}
</script>

<!--
  Here we load all the globally used scss files that generate css. Therefore we do not use scoped styles.
  We could load stuff like grid.scss, helper.scss and so on. Component styles should live inside the components.
-->
<style lang="scss">
// Load global styles
@import "~@/styles/main.scss";

// Example: We can use variables and mixins, that were injected by webpack.
h1 {
  color: map-get($colors, first);
  @include mq("l") {
    color: map-get($colors, second);
  }
}
.test {
  color: map-get($colors, second);
}
</style>
