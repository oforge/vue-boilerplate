<template>
  <div class="notification-wrapper" :class="getSize(size) + ' ' + getPosition(position)">
    <div class="notification" v-for="notification in notifications">
      <spk-button
        class="notification__close-button button btn--ghost"
        :class="state ? 'color--light' : 'color--dark'"
        @click.native="closeNotification()">
        <spk-icon iconClass="icon--cross" iconName="cross" />
      </spk-button>
      <div class="notification__header p-l-s p-r-xxl" :class="state ? 'bg--' + state : ''">
        <slot name="header">
          <h3>
            {{ notification }}
          </h3>
        </slot>
      </div>
      <div class="notification__body">
        <slot name="body">
          Default Body
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Spknotification',
  data() {
    return {
      notifications: []
    };
  },
  props: {
    state: String,
    size: {
      type: String,
      default: 's'
    },
    position: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    closeNotification() {
      this.$emit('close');
    },
    getSize(notificationSize) {
      if (notificationSize === 'm') {
        return 'notification-wrapper--size-m';
      }
      if (notificationSize === 'l') {
        return 'notification-wrapper--size-l';
      }
      return 'notification-wrapper--size-s';
    },
    getPosition(position) {
      if (position === 'left') {
        return 'notification-wrapper--from-left';
      }
      return 'notification-wrapper--from-right';
    }
  }
});
</script>

<style lang="scss"></style>
