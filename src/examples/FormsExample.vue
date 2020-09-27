<template>
  <section class="section">
    <p class="section__header">
      Forms
    </p>
    <div class="row">
      <div class="column-12">
        <spk-text name="example" id="example" label="spk-text" v-model="example" placeholder="Your text"></spk-text>
      </div>
      <div class="column-12">
        <spk-text
          name="example2"
          id="example2"
          label="spk-text"
          v-model="example2"
          state="success"
          placeholder="Your number"
        >
          <template #iconBefore>
            <spk-icon iconName="chevron" iconClass="icon--chevron icon--chevron-right"></spk-icon>
          </template>
        </spk-text>
      </div>
      <div class="column-12">
        <spk-text
          name="example3"
          id="example3"
          label="spk-text"
          v-model="example3"
          state="error"
          placeholder="Required"
        >
          <template #iconAfter>
            <spk-icon iconName="cross" iconClass="icon--cross"></spk-icon>
          </template>
        </spk-text>
      </div>
      <div class="column-12">
        <spk-number
          name="mynumber"
          id="mynumber"
          label="spk-number"
          v-model="mynumber"
          placeholder="Your number"
        ></spk-number>
      </div>
      <div class="column-12">
        <spk-checkbox
          name="mycheck"
          id="mycheck"
          label="spk-checkbox"
          value="sendMyCheck"
          v-model="mycheck"
        ></spk-checkbox>
      </div>
      <div class="column-12">
        <spk-radio name="myradio" id="myradio1" label="spk-radio 1" value="radio 1" v-model="myradio"></spk-radio>
        <spk-radio name="myradio" id="myradio2" label="spk-radio 2" value="radio 2" v-model="myradio"></spk-radio>
        <p>selected value: {{ myradio }}</p>
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
      example3: '',
      mynumber: 0,
      mycheck: true,
      myradio: ''
    };
  }
});
</script>

<style scoped lang="scss"></style>
