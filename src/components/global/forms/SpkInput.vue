<template>
  <div class="form__control" :class="state ? 'form__control--' + state : ''">
    <label :for="name" class="form__label">{{ label }}</label>
    <slot name="iconBefore"></slot>
    <input
      :name="name"
      :id="id"
      class="form__input form__input--text"
      :class="{
        'form__input--has-icon-before': !!$slots['iconBefore'],
        'form__input--has-icon-after': !!$slots['iconAfter']
      }"
      type="text"
      @input="updateValue"
    />
    <slot name="iconAfter"></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SpkInput',
  props: {
    label: String,
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    state: String
  },
  methods: {
    updateValue(event: InputEvent) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    }
  }
});
</script>

<style lang="scss">
$iconSize: $formSize / 2.5;
.form {
  &__control {
    position: relative;
    display: block;
    &--success {
      .icon {
        color: map-get($stateColors, 'success');
      }
      .form__input,
      .form__input:focus {
        border-color: map-get($stateColors, 'success');
      }
      .form__input:focus {
        box-shadow: 0 0 1px map-get($stateColors, 'success');
      }
    }
    &--error {
      .icon {
        color: map-get($stateColors, 'error');
      }
      .form__input,
      .form__input:focus {
        border-color: map-get($stateColors, 'error');
      }
      .form__input:focus {
        box-shadow: 0 0 1px map-get($stateColors, 'error');
      }
    }
  }
  &__label {
    margin-bottom: map-get($sizes, 's');
    display: block;
    cursor: pointer;
  }
  &__input {
    border: 1px solid map-get($greyTones, 'light');
    padding: 0 map-get($sizes, 's');
    height: $formSize;
    &--has-icon-before {
      padding-left: $formSize;
    }
    &--has-icon-before {
      padding-right: $formSize;
    }
    width: 100%;
    &:focus {
      border-color: map-get($greyTones, 'medium');
      box-shadow: 0 0 1px map-get($greyTones, 'light');
    }
  }
}
.form__control .icon {
  position: absolute;
  width: $iconSize;
  height: $iconSize;
  bottom: $formSize / 2;
  pointer-events: none;
  margin-bottom: ($iconSize / 2 * -1);
}
.form__label + .icon {
  left: $formSize / 2;
  margin-left: ($iconSize / 4 * -1);
}
.form__input + .icon {
  right: $formSize / 2;
  margin-right: ($iconSize / 4 * -1);
}
</style>
