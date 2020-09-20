<template>
  <section class="section">
    <p class="section__header">
      Buttons
    </p>
    <div class="row">
      <div class="column-12">
        <spk-button>Button</spk-button>
        <spk-button class="m-t-xs button--first">Button first</spk-button>
        <spk-button class="m-t-xs button--second">Button second</spk-button>
        <spk-button class="m-t-xs button--error">Button error</spk-button>
        <spk-button class="m-t-xs button--warning">Button warning</spk-button>
        <spk-button class="m-t-xs button--info">Button info</spk-button>
        <spk-button class="m-t-xs button--success">Button success</spk-button>
        <spk-button class="m-t-xs button--first">
          <spk-icon iconClass="icon--cross" iconName="cross" />
          <span>Button with icon left</span>
        </spk-button>
        <spk-button class="m-t-xs button--second">
          <span>Button with icon right</span>
          <spk-icon iconClass="icon--chevron icon--chevron-right" iconName="chevron" />
        </spk-button>
      </div>
    </div>
    <div class="row">
      <div class="column-12">
        <h3 class="section__sub-header">Button List</h3>
      </div>
      <div class="column-12">
        <div class="button-list">
          <spk-button>Button</spk-button>
          <spk-button class="button--first">Button first</spk-button>
          <spk-button class="button--second">Button second</spk-button>
          <spk-button class="button--error">Button error</spk-button>
          <spk-button class="button--warning">Button warning</spk-button>
          <spk-button class="button--info">Button info</spk-button>
          <spk-button class="button--success">Button success</spk-button>
        </div>
      </div>
    </div>
  </section>
</template>
