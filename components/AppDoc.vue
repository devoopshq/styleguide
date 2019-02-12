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
  padding-left: calc(4vw + 256px);
  padding-right: 24px;
  display: flex;
}
.docLeft,
.docRight {
  max-width: 512px;
  flex-grow: 1;
}
.docRight {
  margin-top: 84px;
  margin-left: 4vw;
}
</style>
