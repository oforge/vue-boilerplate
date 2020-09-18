<template>
  <div>
    <Modal v-if="showModal" @close="showModal = false"></Modal>
    <button @click="showModal = true">Öffne Modal</button>
  </div>
</template>

<script>
import Vue from 'vue';
import Modal from '@/components/global/Modal.vue';
export default Vue.extend({
  name: 'Streams',
  components: { Modal },
  data() {
    return {
      showModal: false
    };
  }
});
</script>

<style scoped lang="scss"></style>
