<template>
  <section class="section">
    <p class="section__header">
      Scss Mixins
    </p>
    <div class="row">
      <div class="column-12">
        <p class="mixin-special p-m color--light">
          @include <strong>mq('size')</strong> where size is a string that has to match the key of the $breakpoints variable. Here we have a
          .mixin-special class that has the primary color as background. At a media query that matches the size 'l', the background color changes.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.mixin-special {
  background: map-get($colors, 'primary');
  @include mq('l') {
    background: map-get($colors, 'secondary');
  }
}
</style>