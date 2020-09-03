<!--
  This is an example component. It should not be used as a global component.
-->
<template>
  <div class="stage flex flex--center-all">
    <h1>this is a stage</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Stage extends Vue {}
</script>

<style lang="scss" scoped>
.stage {
  height: 5rem;
  width: 100%;
  background: #444;
}
</style>
