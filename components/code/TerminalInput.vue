<template>
  <pre v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
pre {
  color: var(--color);
  font-family: var(--monospace);
  font-size: 13px;
  line-height: 20px;
  white-space: pre;
  /* border-width: 1px; */
  /* border-style: solid; */
  /* border-color: var(--gray1); */
  /* border-image: initial; */
  margin: 8px 0;
  overflow: auto;
  padding: 8px 0;
  overflow-x: auto;
}
/* div::before {
  content: "$ ";
} */
</style>
