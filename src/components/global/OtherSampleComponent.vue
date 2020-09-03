<template>
  <div class="other-sample-component">
    <h1>This is the Other Sample Component.</h1>
    <h2>It's also cool but this one will not be lazy imported!</h2>
    <h3>It's also cool but this one will not be lazy imported!</h3>
    <h4>It's also cool but this one will not be lazy imported!</h4>
    <h5>It's also cool but this one will not be lazy imported!</h5>
    <h6>It's also cool but this one will not be lazy imported!</h6>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class OtherSampleComponent extends Vue {}
</script>
