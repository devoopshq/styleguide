<template lang="pug">
  <div>
    <label v-if="label !== ''" :for="id">{{ label }}</label>
    <input :id="id" type="range" :min="min" :max="max" :step="step" :value="value"  @input="$emit('update:value', $event.target.value)">
    <div v-if="range" class="range">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    min: {
      type: [Number, String],
      default: ''
    },
    max: {
      type: [Number, String],
      default: ''
    },
    step: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    },
    range: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
:root {
  --thumb-width: 16px;
  --thumb-height: 16px;
  --track-color: #000;
  --thumb-color: #000;
  --track-width: 100%;
  --track-height: 1px;
}
[type="range"] {
  -webkit-appearance: none;
  margin: 0 0 1rem 0;
  width: 100%;
}

[type="range"]:focus {
   outline: 0;
}

[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.12);
  border: 0;
}

[type="range"]::-webkit-slider-thumb {
  border: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -12px;
}

/*   &::-moz-range-track
    width $trackWidth
    height $trackHeight
    cursor pointer
    background-color $trackColor
    border 0
  &::-moz-range-thumb
    width $thumbWidth
    height $thumbHeight
    border-radius 50%
    background-color $thumbColor
    cursor pointer
    border 0
  &::-moz-focus-outer
    border 0 */
.range {
  color: var(--gray3);
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
