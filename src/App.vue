<template>
  <div id="app">
    <variables-example></variables-example>
    <headlines-example></headlines-example>
    <colors-example></colors-example>
    <links-example></links-example>
    <spacing-example></spacing-example>
    <flex-example></flex-example>
    <grid-example></grid-example>
    <buttons-example></buttons-example>
    <modal-example></modal-example>
    <forms-example></forms-example>
    <notification-example></notification-example>
    <spk-sprite />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeadlinesExample from '@/examples/HeadlinesExample.vue';
import ColorsExample from '@/examples/ColorsExample.vue';
import ButtonsExample from '@/examples/ButtonsExample.vue';
import ModalExample from '@/examples/ModalExample.vue';
import FormsExample from '@/examples/FormsExample.vue';
import NotificationExample from '@/examples/NotificationExample.vue';
import LinksExample from '@/examples/LinksExample.vue';
import GridExample from '@/examples/GridExample.vue';
import SpacingExample from '@/examples/SpacingExample.vue';
import FlexExample from '@/examples/FlexExample.vue';
import VariablesExample from '@/examples/VariablesExample.vue';

export default Vue.extend({
  components: {
    'headlines-example': HeadlinesExample,
    'colors-example': ColorsExample,
    'buttons-example': ButtonsExample,
    'modal-example': ModalExample,
    'forms-example': FormsExample,
    'notification-example': NotificationExample,
    'links-example': LinksExample,
    'grid-example': GridExample,
    'spacing-example': SpacingExample,
    'flex-example': FlexExample,
    'variables-example': VariablesExample
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
    border-bottom: 4px solid rgba(map-get($colors, 'secondary'), 1);
    background: rgba(map-get($colors, 'dark'), 0.8);
    color: map-get($fontColors, 'light');
  }
  &__sub-header {
    padding: map-get($sizes, 'xs') map-get($sizes, 'l');
    font-size: map-get($fontSizes, 'm');
    line-height: $baseLineHeight * 2;
    margin: $baseLineHeight * 2 0;
    border-bottom: 4px solid rgba(map-get($colors, 'secondary'), 1);
    background: rgba(map-get($colors, 'dark'), 0.8);
    color: map-get($fontColors, 'light');
  }
  pre {
    display: block;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  code {
    background: map-get($colors, 'primary');
    padding: 0.175rem 0.5rem;
    color: map-get($colors, 'light');
    &.code--scss {
      font-family: monospace;
      font-size: 14px;
      line-height: 1.4;
      background: transparent;
      color: map-get($colors, 'primary');
    }
  }
}
</style>
