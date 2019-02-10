<template>
  <div>
    <p>
      Caught a mistrake or want to contribute to the documentation? Edit this page on <a :href="'https://github.com' + href">GitHub</a>.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
p {
  font-size: 14px;
  line-height: 1.714;
  font-weight: 400;
}

a {
  color: var(--blue-aa);
  text-decoration: none;
}
</style>
