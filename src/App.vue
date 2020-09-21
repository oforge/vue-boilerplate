<template>
  <div id="app">
    <headlines-example></headlines-example>
    <colors-example></colors-example>
    <buttons-example></buttons-example>
    <modal-example></modal-example>
    <icon-sprite />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconSprite from '@/components/IconSprite.vue';
import HeadlinesExample from '@/examples/HeadlinesExample.vue';
import ColorsExample from '@/examples/ColorsExample.vue';
import ButtonsExample from '@/examples/ButtonsExample.vue';
import ModalExample from '@/examples/ModalExample.vue';

export default Vue.extend({
  components: {
    'icon-sprite': IconSprite,
    'headlines-example': HeadlinesExample,
    'colors-example': ColorsExample,
    'buttons-example': ButtonsExample,
    'modal-example': ModalExample
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
  padding: map-get($sizes, 's') map-get($sizes, 's') $baseLineHeight * 2 map-get($sizes, 's');

  &__header {
    padding: map-get($sizes, 'xs') map-get($sizes, 'l');
    font-size: map-get($fontSizes, 'l');
    line-height: $baseLineHeight * 3;
    margin-bottom: $baseLineHeight * 2;
    border-bottom: 4px solid rgba(map-get($colors, 'second'), 1);
    background: rgba(map-get($colors, 'dark'), 0.8);
    color: map-get($fontColors, 'light');
  }
  &__sub-header {
    padding: map-get($sizes, 'xs') map-get($sizes, 'l');
    font-size: map-get($fontSizes, 'm');
    line-height: $baseLineHeight * 2;
    margin: $baseLineHeight * 2 0;
    border-bottom: 4px solid rgba(map-get($colors, 'second'), 1);
    background: rgba(map-get($colors, 'dark'), 0.8);
    color: map-get($fontColors, 'light');
  }
}
</style>
