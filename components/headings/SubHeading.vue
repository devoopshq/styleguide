<template>
  <span v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
span {
  text-transform: uppercase;
  color: var(--gray3);
  font-size: 14px;
}
</style>
