<template>
  <ol>
    <li v-for="(list, index) in lists" :key="index">
      {{ list }}
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
ol {
  margin-left: 1rem;
  padding: 0;
}
li {
  font-size: 14px;
  line-height: 1.714;
  margin-bottom: 1rem;
}
</style>
