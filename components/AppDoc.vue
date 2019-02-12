<template>
  <div class="doc">
    <div class="docLeft">
      <slot name="left"/>
    </div>
    <div class="docRight">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.doc {
  /* outline: 1px dashed; */
  display: flex;
}
.docLeft,
.docRight {
  max-width: 512px;
  flex-grow: 1;
}
.docLeft {
  padding-left: 5vw;
}
.docRight {
  padding: 0 5vw;
}
@media (max-width: 512px) {
  .doc {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
  .docLeft,
  .docRight {
    width: 100%;
    padding: 0;
  }
  .docRight {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
