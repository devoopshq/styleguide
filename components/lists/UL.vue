<template>
  <ul>
    <li v-for="(list, index) in lists" :key="index">
      {{ list }}
    </li>
  </ul>
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
ul {
  list-style-type: none;
  margin-left: 1rem;
  padding: 0;
}
li {
  font-size: 14px;
  line-height: 1.714;
  margin-bottom: 1rem;
}
li::before {
  content: "-";
  display: inline-block;
  position: absolute;
  margin-left: -1rem;
}
</style>
