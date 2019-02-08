<template>
  <div v-html="content" />
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
>>> p {
  font-size: 14px;
  line-height: 1.714;
  font-weight: 400;
}
>>> code {
  color: var(--magenta-aa);
  font-family: var(--monospace);
  font-size: 13px;
  white-space: pre-wrap;
}
>>> code::before {
  content: '`';
}
>>> code::after {
  content: '`';
}
>>> a {
  color: var(--blue-aa);
  text-decoration: none;
}
>>> .external {
  margin-left: 4px;
  fill: var(--blue-aa);
  vertical-align: middle;
  transform: translateY(-1px);
}
</style>
