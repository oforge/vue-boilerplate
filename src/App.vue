<template>
  <div id="app">
    <stage />

    <!--
      Example usage of a button.
    -->
    <base-button>
      <base-icon iconClass="icon--inline icon--second icon--l icon--before" iconName="chevron" />
      Click me
    </base-button>
    <base-input
      iconBefore="chevron"
      iconAfter="chevron"
      iconBeforeClass="icon--chevron icon--chevron-up"
      iconAfterClass="icon--chevron icon--chevron-down"
    />
    <sprite />
    <modal></modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppStage from '@/components/AppStage.vue';
import AppSprite from '@/components/AppSprite.vue';
import ModalExample from '@/components/global/ModalExample.vue';

export default Vue.extend({
  components: {
    stage: AppStage,
    sprite: AppSprite,
    modal: ModalExample
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
