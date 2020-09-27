<template>
  <section class="section">
    <p class="section__header">
      Buttons
    </p>
    <div class="row">
      <div class="column-12">
        <spk-button>.btn</spk-button>
        <spk-button class="m-t-xs btn--primary">.btn--primary</spk-button>
        <spk-button class="m-t-xs btn--secondary">.btn--secondary</spk-button>
        <spk-button class="m-t-xs btn--error">.btn--error</spk-button>
        <spk-button class="m-t-xs btn--warning">.btn--warning</spk-button>
        <spk-button class="m-t-xs btn--info">.btn--info</spk-button>
        <spk-button class="m-t-xs btn--success">.btn--success</spk-button>
        <spk-button class="m-t-xs btn--primary">
          <spk-icon iconClass="icon--cross" iconName="cross" />
          <span>Button with icon left</span>
        </spk-button>
        <spk-button class="m-t-xs btn--secondary">
          <span>Button with icon right</span>
          <spk-icon iconClass="icon--chevron icon--chevron-right" iconName="chevron" />
        </spk-button>
      </div>
    </div>
    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">Button List</p>
      </div>
      <div class="column-12">
        <div class="btn-list">
          <spk-button>Button</spk-button>
          <spk-button class="btn--primary">Button first</spk-button>
          <spk-button class="btn--secondary">Button second</spk-button>
          <spk-button class="btn--error">Button error</spk-button>
          <spk-button class="btn--warning">Button warning</spk-button>
          <spk-button class="btn--info">Button info</spk-button>
          <spk-button class="btn--success">Button success</spk-button>
        </div>
      </div>
    </div>
  </section>
</template>
