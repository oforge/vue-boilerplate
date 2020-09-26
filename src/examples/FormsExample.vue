<template>
  <section class="section">
    <p class="section__header">
      Forms
    </p>
    <div class="row">
      <div class="column-12">
        <spk-input name="example" id="example" label="example" v-model="example" placeholder="Your text"></spk-input>
      </div>
      <div class="column-12">
        <spk-input
          name="example2"
          type="number"
          id="example2"
          label="example2"
          v-model="example2"
          state="success"
          placeholder="Your number"
        >
          <template #iconBefore>
            <spk-icon iconName="chevron" iconClass="icon--chevron icon--chevron-right"></spk-icon>
          </template>
        </spk-input>
      </div>
      <div class="column-12">
        <spk-input
          name="example3"
          id="example3"
          label="example3"
          v-model="example3"
          state="error"
          placeholder="Required"
        >
          <template #iconAfter>
            <spk-icon iconName="cross" iconClass="icon--cross"></spk-icon>
          </template>
        </spk-input>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'FormsExample',
  data() {
    return {
      example: '',
      example2: '',
      example3: ''
    };
  }
});
</script>

<style scoped lang="scss"></style>
