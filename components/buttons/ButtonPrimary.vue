<template>
  <button :class="{ warning }" :aria-label="action" :disabled="disabled">
    <slot>ACTION</slot>
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: ''
    },
    warning: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
button{
  min-width: 64px;
  height: 32px;
  -webkit-appearance: none;
  color: var(--white);
  font-size: 12px;
  text-transform: uppercase;
  user-select: none;
  line-height: 0;
  background-color: var(--black);
  padding: 0 1rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--black);
  border-image: initial;
  border-radius: 4px;
  font-variation-settings: 'wght' 600;
  display: flex;
  align-items: center;
}
button:disabled {
  background-color: var(--gray1);
  border-color: var(--gray1);
}
.warning {
  background-color: var(--red-aa);
  border-color: var(--red-aa);
}
</style>
