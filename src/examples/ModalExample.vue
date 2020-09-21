<template>
  <section class="section">
    <p class="section__header">
      Modal
    </p>
    <div class="row">
      <div class="column-12">
        <spk-modal v-if="showModal1" @close="showModal1 = false"></spk-modal>
        <spk-button class="button--first" @click.native="showModal1 = true"
          >Öffne Standard Modal</spk-button
        >
      </div>
      <div class="column-12">
        <spk-modal v-if="showModal2" @close="showModal2 = false" modalState="success" size="l">
          <template #header>
            <h3 class="color-light">Dies ist ein etwas längerer Header zum testen</h3>
          </template>
          <template #body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Alias animi asperiores, excepturi fugiat modi
              molestias natus officia perspiciatis possimus, qui quibusdam quis ullam! Architecto
              facere quo totam unde voluptas voluptatem?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores,
              excepturi fugiat modi molestias natus officia perspiciatis possimus, qui quibusdam
              quis ullam! Architecto facere quo totam unde voluptas voluptatem? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Alias animi asperiores, excepturi fugiat modi
              molestias natus officia perspiciatis possimus, qui quibusdam quis ullam! Architecto
              facere quo totam unde voluptas voluptatem?
            </p>
          </template>
          <template #footer>
            <spk-button class="button--success" @click.native="showModal2 = false">
              Weiter
            </spk-button>
          </template>
        </spk-modal>
        <spk-button class="button--success" @click.native="showModal2 = true">
          Öffne Success Modal
        </spk-button>
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
      showModal1: false,
      showModal2: false
    };
  }
});
</script>

<style scoped lang="scss"></style>
