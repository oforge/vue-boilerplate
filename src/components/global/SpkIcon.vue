<!--
  A simple icon wrapper component. Takes two props: iconClass and iconName.
  The iconClass is for overriding the behaviour like making it bigger.
  The iconName is for selecting the correct icon. As an example we have the icon 'chevron'.
-->
<template>
  <svg class="icon" :class="iconClass">
    <use v-bind="{ 'xlink:href': '#' + iconName }" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SpkIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss">
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: map-get($iconSizes, 's');
  height: map-get($iconSizes, 's');
  fill: currentColor;

  &--inline {
    display: inline-flex;
  }
  &--m {
    width: map-get($iconSizes, 'm');
    height: map-get($iconSizes, 'm');
  }
  &--l {
    width: map-get($iconSizes, 'l');
    height: map-get($iconSizes, 'l');
  }
  &--first {
    fill: map-get($colors, 'first');
  }
  &--second {
    fill: map-get($colors, 'second');
  }
  &--chevron-up {
    transform: rotateZ(90deg);
  }
  &--chevron-right {
    transform: rotateZ(180deg);
  }
  &--chevron-down {
    transform: rotateZ(270deg);
  }
}
.button .icon--before {
  margin-left: map-get($sizes, 's') * -1;
}
.button .icon--after {
  margin-right: map-get($sizes, 's') * -1;
}
</style>
