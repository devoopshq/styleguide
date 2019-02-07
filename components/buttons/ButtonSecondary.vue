<template>
  <button class="button">
    {{ action }}
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
.button {
  min-width: 64px;
  height: 32px;
  -webkit-appearance: none;
  color: var(--gray2);
  font-size: 12px;
  text-transform: uppercase;
  user-select: none;
  line-height: 0;
  background: var(--white);
  padding: 0 1rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--gray1);
  border-image: initial;
  border-radius: 2px;
  font-weight: 700;
}
.button:hover {
  color: var(--black);
}
</style>
