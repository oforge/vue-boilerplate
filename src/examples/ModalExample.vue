<template>
  <section class="section">
    <p class="section__header">
      Modal
    </p>
    <div class="row">
      <div class="column-12">
        <spk-modal v-if="showModal" @close="showModal = false"></spk-modal>
        <spk-button @click.native="showModal = true">Öffne Modal</spk-button>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ModalExample',
  data() {
    return {
      showModal: false
    };
  }
});
</script>

<style scoped lang="scss"></style>
