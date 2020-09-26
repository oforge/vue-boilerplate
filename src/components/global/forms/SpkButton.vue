<!--
  This is a sample form component. Here we have a base button. The components should be as dumb as possible.
  Here we simply use the button with a slot so that every parent component can alter it easily.
-->
<template>
  <button class="button">
    <slot><span>Submit</span></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SpkButton'
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  appearance: none;
  border: 1px solid transparent;
  padding: map-get($sizes, 's') map-get($sizes, 'm');

  background: map-get($greyTones, 'light');
  color: map-get($fontColors, 'light');
  cursor: pointer;
  &:hover,
  &:active {
    background: darken(map-get($greyTones, 'light'), 5%);
  }
  &:active {
    border: 1px solid lighten(map-get($greyTones, 'light'), 5%);
  }

  &--inline {
    display: inline-flex;
  }

  &--first {
    background: map-get($colors, 'first');
    &:hover,
    &:active {
      background: darken(map-get($colors, 'first'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($colors, 'first'), 30%);
    }
  }

  &--second {
    background: map-get($colors, 'second');
    &:hover,
    &:active {
      background: darken(map-get($colors, 'second'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($colors, 'second'), 5%);
    }
  }

  &--error {
    background: map-get($stateColors, 'error');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'error'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'error'), 20%);
    }
  }

  &--warning {
    background: map-get($stateColors, 'warning');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'warning'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'warning'), 5%);
    }
  }

  &--info {
    background: map-get($stateColors, 'info');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'info'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'info'), 20%);
    }
  }

  &--success {
    background: map-get($stateColors, 'success');
    &:hover,
    &:active {
      background: darken(map-get($stateColors, 'success'), 5%);
    }
    &:active {
      border: 1px solid lighten(map-get($stateColors, 'success'), 5%);
    }
  }

  &--ghost {
    background: transparent;
    &:hover,
    &:active {
      background: transparent;
    }
    &:active {
      border: 1px solid transparent;
    }
  }

  .icon + span,
  span + .icon {
    margin-left: map-get($sizes, s);
  }
  span {
    color: currentColor;
  }
}

.button-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .button {
    margin-right: map-get($sizes, 'xs');

    &:last-child {
      margin-left: 0;
    }
  }
}
</style>
