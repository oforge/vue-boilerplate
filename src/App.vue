<template>
  <div id="app">
    <stage></stage>
    <sample-component></sample-component>
    <other-sample-component></other-sample-component>

    <!--
      Example usage of a button.
    -->
    <app-button>
      <app-icon
        iconClass="icon--inline icon--second icon--l"
        iconName="chevron"
      />
      Click me
    </app-button>
    <base-input iconBefore="chevron" iconAfter="chevron" />
    <Sprite />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppStage from '@/components/AppStage.vue';
import AppSprite from '@/components/AppSprite.vue';

export default Vue.extend({
  components: {
    stage: AppStage,
    sprite: AppSprite
  }
});
</script>

<!--
  Here we load all the globally used scss files that generate css. Therefore we do not use scoped styles.
  We could load stuff like grid.scss, helper.scss and so on. Component styles should live inside the components.
-->
<style lang="scss">
// Load global styles
@import '~@/styles/main.scss';

// Example: We can use variables and mixins, that were injected by webpack.
h1 {
  color: map-get($colors, first);
  @include mq('l') {
    color: map-get($colors, second);
  }
}
.test {
  color: map-get($colors, second);
}
</style>
