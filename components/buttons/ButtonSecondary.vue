<template>
  <button :aria-label="action">
    <slot>ACTION</slot>
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
button {
  min-width: 64px;
  height: 32px;
  -webkit-appearance: none;
  color: var(--gray3);
  font-size: 12px;
  text-transform: uppercase;
  user-select: none;
  line-height: 0;
  background: rgb(var(--background-color));
  padding: 0 1rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--gray3);
  border-image: initial;
  border-radius: 4px;
  font-variation-settings: 'wght' 600;
}
button:hover {
  color: rgb(var(--color));
}
</style>
