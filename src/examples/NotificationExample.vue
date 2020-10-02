<template>
  <section class="section">
    <p class="section__header">
      Notifications
    </p>
    <div class="row">
      <div class="column-12">
        <spk-button class="btn--primary" @click.native="addNotification()">Öffne eine Notification</spk-button>
      </div>
      <div class="column-12">
        <spk-button class="btn--primary" @click.native="addFastNotification()"
          >Öffne eine Notification für 1 Sekunde</spk-button
        >
      </div>
    </div>
    <spk-notification></spk-notification>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { NotificationInterface } from '@/interfaces/notification.interface';

const testNotifications: NotificationInterface[] = [
  {
    id: Math.floor(Math.random() * Math.floor(1000)),
    state: '',
    title: 'Hi',
    message: 'This is a message!'
  },
  {
    id: Math.floor(Math.random() * Math.floor(1000)),
    state: 'success',
    title: 'YESS!',
    message: 'Everything went perfect!'
  },
  {
    id: Math.floor(Math.random() * Math.floor(1000)),
    state: 'error',
    title: 'Oh Noes!',
    message: 'This is is really bad!'
  }
];

export default Vue.extend({
  name: 'NotificationExample',
  methods: {
    addNotification(duration?: number) {
      console.log('duration', duration);
      const i: number = Math.floor(Math.random() * Math.floor(testNotifications.length));
      const notification = testNotifications[i];
      if (duration) {
        notification.duration = duration;
      }
      this.$store.dispatch('notificationModule/addNotification', notification);
    },
    addFastNotification() {
      const notification: NotificationInterface = {
        id: Math.floor(Math.random() * 1000),
        state: 'primary',
        title: 'FAAST!!!',
        message: 'WOW This was fast!',
        duration: 1000
      };
      this.$store.dispatch('notificationModule/addNotification', notification);
    }
  }
});
</script>

<style scoped lang="scss"></style>
