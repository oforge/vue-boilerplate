<template>
  <div class="form-control">
    <label>test</label>
    <base-icon
      :iconClass="['form-element__before', 'icon--m', iconBeforeClass]"
      :iconName="iconBefore"
      v-if="iconBefore"
    />
    <input class="form-element" type="text" />
    <base-icon
      :iconClass="['form-element__after', 'icon--m', iconAfterClass]"
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
    iconAfter: String,
    iconBeforeClass: String,
    iconAfterClass: String
  }
});
</script>

<style lang="scss">
.form-control {
  position: relative;
  display: block;
}
.form-element {
  border: 1px solid map-get($greyTones, medium);
  padding: 0 $formSize;
  height: $formSize;
  width: 100%;

  &__before,
  &__after {
    position: absolute;
    bottom: $formSize / 2;
    pointer-events: none;
    margin-bottom: ($formSize / 4 * -1);
  }
  &__before {
    left: $formSize / 2;
    margin-left: ($formSize / 4 * -1);
  }
  &__after {
    right: $formSize / 2;
    margin-right: ($formSize / 4 * -1);
  }
}
</style>
