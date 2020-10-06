<template>
  <section class="section">
    <p class="section__header">
      Spacing
    </p>
    <div class="row">
      <div class="column-12">
        <p>
          The spacing helper classes are either padding <strong v-text="'.p-{{ configuration }}'"></strong> or margin
          <strong v-text="'.m-{{ configuration }}'"></strong>.All configuration options can be used by both, padding and
          margin classes. The configuration options are either <strong v-text="'.m-{{ size }}'"></strong> what adds e.g.
          margin on all sides or <strong v-text="'.p-{{ side }}-{{ size }}'"></strong>
          to add e.g. padding to a specific side or horizontally or vertically.
        </p>
        <div class="flex m-t-m">
          <div class="m-h-s"><p class="bg--primary p-0">No padding: .p-0</p></div>
          <div class="m-h-s"><p class="bg--primary p-xs">XS padding: .p-xs</p></div>
          <div class="m-h-s"><p class="bg--primary p-s">S padding: .p-s</p></div>
          <div class="m-h-s"><p class="bg--primary p-m">M padding: .p-m</p></div>
          <div class="m-h-s"><p class="bg--primary p-l">L padding: .p-l</p></div>
          <div class="m-h-s"><p class="bg--primary p-xl">XL padding: .p-xl</p></div>
        </div>
        <div class="flex m-t-m">
          <div class="m-h-s"><p class="bg--primary p-t-xl">XL padding top: .p-t-xl</p></div>
          <div class="m-h-s"><p class="bg--primary p-r-xl">XL padding right: .p-r-xl</p></div>
          <div class="m-h-s"><p class="bg--primary p-b-xl">XL padding bottom: .p-b-xl</p></div>
          <div class="m-h-s"><p class="bg--primary p-l-xl">XL padding left: .p-l-xl</p></div>
          <div class="m-h-s"><p class="bg--primary p-h-xl">XL padding horizontal: .p-h-xl</p></div>
          <div class="m-h-s"><p class="bg--primary p-v-xl">XL padding vertical: .p-v-xl</p></div>
        </div>
      </div>
    </div>
  </section>
</template>
