<template>
  <section class="section">
    <p class="section__header">
      Scss Functions
    </p>
    <div class="row">
      <div class="column-12">
        <p>The <strong>z()</strong> function can be used to give an element a z-index, if needed. In the <strong>_variables.scss</strong> file, there is
        a <strong>$z-indexes</strong> map, that includes all indexable elements. When defining a z-index for your element, you first add the element name
        to the $z-index map. Then you pass the name to the <strong>z()</strong> function when you set the z-index in your scss. Example:</p>
        <p><strong>_variables.scss:</strong></p>
        <pre><code class="code--scss">
          $z-indexes: ('notification', 'modal'); // notification has index 1, modal has index 2, etc...
        </code></pre>
        <p><strong>SpkModal.vue:</strong></p>
        <pre><code class="code--scss">
          ...
          &lt;style lang="scss"&gt;
            .modal { z-index: z('modal'); }
          &lt;/style&gt;
        </code></pre>
      </div>
    </div>
  </section>
</template>
