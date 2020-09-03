<template>
  <div class="sample-component">
    <h1>This is the Sample Component.</h1>
    <h2>
      It's cool because it gets loaded automatically and is lazy imported!
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class SampleComponent extends Vue {}
</script>
