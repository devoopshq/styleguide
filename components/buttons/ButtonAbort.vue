<template>
  <button :class="{ warning }" class="button">
    {{ action }}
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
    }
  }
}
</script>

<style lang="postcss" scoped>
.button {
  min-width: 64px;
  height: 32px;
  -webkit-appearance: none;
  color: var(--gray2);
  font-size: 12px;
  text-transform: uppercase;
  user-select: none;
  line-height: 0;
  background-color: transparent;
  padding: 0 1rem;
  outline: none;
  border: none;
  font-weight: 700;
}
.warning {
  color: #f00;
}
</style>
