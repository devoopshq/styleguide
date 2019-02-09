<template>
  <figure v-if="caption">
    <img :src="src" :srcset="srcset" :alt="alt">
    <figcaption>{{ caption }}</figcaption>
  </figure>
  <img v-else :src="src" :srcset="srcset" :alt="alt">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    },
    srcset: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
  }
}
</script>

<style lang="postcss" scoped>
img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
figure {
  margin: 0;
}
figcaption {
  color: var(--gray3);
  font-size: 13px;
  padding: 16px 0;
}
</style>
