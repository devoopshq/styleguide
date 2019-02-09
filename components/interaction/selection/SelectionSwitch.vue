<template>
  <label>
    <input v-model="checked" :disabled="disabled" type="checkbox">
    <span class="slider" />
    <span class="track" />
  </label>
</template>

<script>
export default {
  props: {
    checked: {
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
input {
  opacity: 0;
  width: 0;
  height: 0;
}
label {
  position: relative;
  width: 32px;
  height: 16px;
  display: block;
  background-color: transparent;
  cursor: pointer;
}
.track {
  position: absolute;
  top: 8px;
  width: 100%;
  height: 1px;
  display: block;
  z-index: 0;
}
.slider {
  position: absolute;
  top: 0;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  vertical-align: middle;
  display: block;
  z-index: 1;
}
.track ,
.slider {
  background-color: var(--gray2);
}
input:checked + .slider {
  left: auto;
  right: 2px;
}
input:checked + .slider,
input:checked ~ .track {
  background-color: var(--black);
}
input:focus + .slider {}
input:disabled + .slider,
input:disabled ~ .track {
  background-color: var(--gray1);
}
</style>
