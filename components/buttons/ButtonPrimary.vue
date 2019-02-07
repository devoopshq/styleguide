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
  border-radius: 2px;
  font-weight: 700;
}
.button:disabled {
  background-color: var(--gray1);
  border-color: var(--gray1);
}
.warning {
  background-color: #f00;
  border-color: #f00;
}
</style>
