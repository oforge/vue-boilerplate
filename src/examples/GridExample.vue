<template>
  <section class="section">
    <p class="section__header">
      Column Grid
    </p>
    <div class="row">
      <div class="column-12">
        <span class="code">
          <pre>
  <strong>Here is how it works:</strong>
  
  - Define a <code>&lt;div class="row"&gt;</code>
  - Inside, define <code>&lt;div class="column-x"&gt;</code>
    <code>.column-x</code> is the class name for a column size where x is a number. Per default between 1 and 12.
    You can override the column size via breakpoint columns. E.g. <code>&lt;div class="column-12 column-m-6 column-l-3"&gt;</code>
    Currently there are only <code>.column-x</code>, <code>.column-m-x</code> and <code>.column-l-x</code> columns defined. If you need more, do it!
  - If you want to reorder and position columns inside the grid track, you can do it with the <code>.start-at-x</code> class.
    E.g. <code>&lt;div class="column-6 column-m-4 column-l-2 start-at-6 start-at-m-8 start-at-l-10"&gt;</code> would resize the
    column from 6 to 4 to 2 and reposition it from position 6 to 8 to 10.</pre>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">All 12 Columns</p>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>
      <div class="column-1 bg--primary p-s">
        <span class="color--light">.column-1</span>
      </div>

      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>
      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>
      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>
      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>
      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>
      <div class="column-2 bg--secondary p-s">
        <span class="color--light">.column-2</span>
      </div>

      <div class="column-3 bg--primary p-s">
        <span class="color--light">.column-3</span>
      </div>
      <div class="column-3 bg--primary p-s">
        <span class="color--light">.column-3</span>
      </div>
      <div class="column-3 bg--primary p-s">
        <span class="color--light">.column-3</span>
      </div>
      <div class="column-3 bg--primary p-s">
        <span class="color--light">.column-3</span>
      </div>

      <div class="column-4 bg--secondary p-s">
        <span class="color--light">.column-4</span>
      </div>
      <div class="column-4 bg--secondary p-s">
        <span class="color--light">.column-4</span>
      </div>
      <div class="column-4 bg--secondary p-s">
        <span class="color--light">.column-4</span>
      </div>

      <div class="column-5 bg--primary p-s">
        <span class="color--light">.column-5</span>
      </div>
      <div class="column-7 bg--secondary p-s">
        <span class="color--light">.column-7</span>
      </div>

      <div class="column-6 bg--secondary p-s">
        <span class="color--light">.column-6</span>
      </div>
      <div class="column-6 bg--secondary p-s">
        <span class="color--light">.column-6</span>
      </div>

      <div class="column-7 bg--primary p-s">
        <span class="color--light">.column-7</span>
      </div>
      <div class="column-5 bg--secondary p-s">
        <span class="color--light">.column-5</span>
      </div>

      <div class="column-8 bg--secondary p-s">
        <span class="color--light">.column-8</span>
      </div>
      <div class="column-4 bg--primary p-s">
        <span class="color--light">.column-4</span>
      </div>

      <div class="column-9 bg--primary p-s">
        <span class="color--light">.column-9</span>
      </div>
      <div class="column-3 bg--secondary p-s">
        <span class="color--light">.column-3</span>
      </div>

      <div class="column-10 bg--secondary p-s">
        <span class="color--light">.column-10</span>
      </div>
      <div class="column-2 bg--primary p-s">
        <span class="color--light">.column-2</span>
      </div>

      <div class="column-11 bg--primary p-s">
        <span class="color--light">.column-11</span>
      </div>
      <div class="column-1 bg--secondary p-s">
        <span class="color--light">.column-1</span>
      </div>

      <div class="column-12 bg--primary p-s">
        <span class="color--light">.column-12</span>
      </div>
    </div>
    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">Positioning inside the grid</p>
      </div>

      <div class="column-3 start-at-1 bg--secondary p-s">
        <span class="color--light">.column-3.start-at-1</span>
      </div>

      <div class="column-3 start-at-2 bg--secondary p-s">
        <span class="color--light">.column-3.start-at-2</span>
      </div>

      <div class="column-3 start-at-3 bg--secondary p-s">
        <span class="color--light">.column-3.start-at-3</span>
      </div>
    </div>

    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">Changing the column orders</p>
      </div>
      <div class="column-3 start-at-10 bg--error p-s">
        <span class="color--light">First .column-3.start-at-10</span>
      </div>
      <div class="column-4 start-at-6 bg--info p-s">
        <span class="color--light">Second .column-4.start-at-6</span>
      </div>
      <div class="column-5 start-at-1 bg--warning p-s">
        <span class="color--light">Third .column-5.start-at-1</span>
      </div>
    </div>

    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">Changing column size and order on breakpoint</p>
      </div>
      <div class="column-12 column-m-6 start-at-m-3 column-l-3 start-at-l-1 bg--primary p-s">
        <p class="color--light">This is a small 12 medium 6 and large 3 Column</p>
        <p class="color--light p-t-s">.column-12.column-m-6.start-at-m-3.column-l-3.start-at-l-1</p>
      </div>
    </div>
    <div class="row">
      <div class="column-12">
        <p class="section__sub-header">Nesting rows and columns</p>
      </div>
      <div class="column-12 bg--primary p-s">
        <div class="row">
          <div class="column-6 bg--secondary p-s">
            <span class="color--light">Column Inception</span>
          </div>
          <div class="column-6 bg--secondary p-s">
            <span class="color--light">Column Inception</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
