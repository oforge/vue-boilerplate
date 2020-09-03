<!--
  This is a sample form component. Here we have a base button. The components should be as dumb as possible.
  Here we simply use the button with a slot so that every parent component can alter it easily.
-->
<template>
  <button class="button">
    <slot>Submit</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {}
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  padding: map-get($sizes, 's') map-get($sizes, 'm');

  background: map-get($greyTones, 'ultraLight');
  color: map-get($colors, 'second');
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.1s ease;
  box-shadow: map-get($shadows, 's');
  &:hover,
  &:active {
    background: map-get($greyTones, 'light');
  }
  &:active {
    box-shadow: map-get($shadows, 'xs');
  }
}
</style>
