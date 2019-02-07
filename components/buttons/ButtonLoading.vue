<template>
  <button :class="{ warning }" class="button">
    <Spinner />
  </button>
</template>

<script>
import Spinner from '@/components/Spinner'
export default {
  components: { Spinner },
  props: {
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
