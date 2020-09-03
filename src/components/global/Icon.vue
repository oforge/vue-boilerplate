<!--
  A simple icon wrapper component. Takes two props: iconClass and iconName.
  The iconClass is for overriding the behaviour like making it bigger.
  The iconName is for selecting the correct icon. As an example we have the icon 'chevron'.
-->
<template>
  <svg class="icon" :class="iconClass">
    <use
      v-bind="{ 'xlink:href': '#' + iconName }"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    ></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppIcon extends Vue {
  @Prop({ required: true }) private iconClass!: string;
  @Prop({ required: true }) private iconName!: string;
}
</script>

<style lang="scss">
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: map-get($iconSizes, 's');
  height: map-get($iconSizes, 's');

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
}
</style>
