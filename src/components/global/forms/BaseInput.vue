<template>
  <div class="form-control">
    <label>test</label>
    <app-icon
      iconClass="form-element__before icon--m"
      :iconName="iconBefore"
      v-if="iconBefore"
    />
    <input class="form-element" type="text" />
    <app-icon
      iconClass="form-element__after icon--m"
      :iconName="iconAfter"
      v-if="iconAfter"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseInput',
  props: {
    iconBefore: String,
    iconAfter: String
  }
});
</script>

<style lang="scss">
.form-control {
  position: relative;
  display: inline-block;
}
.form-element {
  border: 1px solid map-get($greyTones, medium);
  padding: 0 $formSize;
  height: $formSize;

  &__before,
  &__after {
    position: absolute;
    bottom: $formSize / 2;
    pointer-events: none;
  }
  &__before {
    left: $formSize / 2;
    transform: translateX(-50%) translateY(50%);
  }
  &__after {
    right: $formSize / 2;
    transform: translateX(50%) translateY(50%);
  }
}
</style>
