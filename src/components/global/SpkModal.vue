<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container" :class="{ 'modal__container--isFullwidth': isFullwidth }">
          <spk-button
            v-if="!isNotCloseable"
            class="modal__close-button button button--ghost color-error"
            @click.native="closeModal()"
          >
            <spk-icon iconClass="icon--cross" iconName="cross" />
          </spk-button>
          <div class="modal__header">
            <slot name="header">
              <h3>
                Default header
              </h3>
            </slot>
          </div>
          <div class="modal__body">
            <slot name="body">Default body</slot>
          </div>
          <div class="modal__footer">
            <slot name="footer">
              <spk-button
                v-if="!isNotCloseable"
                class="btn btn-primary"
                @click.native="closeModal()"
              >
                Weiter
              </spk-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'SpkModal',
  data() {
    return {
      showModal: this.modalVisible || false
    };
  },
  model: {
    prop: 'modalVisible',
    event: 'update-modal-visible'
  },
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    isNotCloseable: {
      type: Boolean,
      required: false,
      default: false
    },
    isFullwidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
});
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: z('modal');
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(map-get($colors, 'dark'), 0.8);
  display: table;
  transition: opacity 0.3s ease;
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal__container {
      position: relative;
      width: 20vw;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      &--isFullwidth {
        width: 95vw;
      }
      .modal__close-button {
        position: absolute;
        right: 11px;
        top: 5px;
      }
      .modal__header {
        margin-top: 0;
        color: dimgrey;
      }
      .modal__body {
        margin: 20px 0;
      }
      .modal__footer {
      }
    }
  }
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
