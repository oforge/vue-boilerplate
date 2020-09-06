<template>
  <div class="sample-component">
    <h1>This is the Sample Component.</h1>
    <h2>
      It's cool because it gets loaded automatically and is lazy imported!
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SampleComponent'
});
</script>
