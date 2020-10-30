<template>
  <section class="section">
    <p class="section__header">
      Loading Spinner
    </p>
    <div class="row">
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--primary is-loading p-xxl">
          <p class="color--light">Add .is-loading to the container to make it relative positioned.</p>
          <p class="color--light">Add .is-invisible to the content that has to be made invisible if it is neccessary</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--primary is-loading p-xxl">
          <spk-loader class="spk-loader--s "/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-s</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--secondary is-loading p-xxl">
          <spk-loader class="spk-loader--m "/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-m</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--info is-loading p-xxl">
          <spk-loader class="spk-loader--l "/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-l</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--warning is-loading p-xxl">
          <spk-loader class="spk-loader--xl "/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-xl</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--error is-loading p-xxl">
          <spk-loader class="spk-loader--xxl "/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-xxl</p>
        </div>
      </div>
      <div class="column-12 flex flex--a-center flex--j-center m-m">
        <div class="loading-example bg--light is-loading p-xxl">
          <spk-loader class="spk-loader--xxl spk-loader--dark"/>
        </div>
        <div class="loading-example-text bg--light is-loading p-xxl">
          <p class="color--primary">.spk-loader-xxl</p>
          <p class="color--primary">.spk-loader--dark</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.loading-example-text {
  width: 200px;
}
</style>