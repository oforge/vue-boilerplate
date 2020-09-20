<template>
  <div id="app">
    <headlines></headlines>
    <colors></colors>
    <buttons></buttons>
    <sprite />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppSprite from '@/components/AppSprite.vue';
import Headlines from '@/examples/Headlines.vue';
import Colors from '@/examples/Colors.vue';
import Buttons from '@/examples/Buttons.vue';

export default Vue.extend({
  components: {
    sprite: AppSprite,
    headlines: Headlines,
    colors: Colors,
    buttons: Buttons
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

.section {
  padding: map-get($sizes, 's');
  padding-bottom: $baseLineHeight * 2;

  &__header {
    padding: map-get($sizes, 'm');
    font-size: map-get($fontSizes, 'l');
    line-height: $baseLineHeight * 3;
    margin-bottom: $baseLineHeight * 2;
    background: map-get($colors, first);
    color: map-get($fontColors, light);
  }
}
</style>
