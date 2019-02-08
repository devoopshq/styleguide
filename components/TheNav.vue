<template>
  <nav>
    <div class="links">
      <NuxtLink to="/">
        DevOops <span> v0.1.0</span>
      </NuxtLink>
      <NuxtLink v-for="(link, index) in links" :key="index" :to="'/' + link.toLowerCase()">
        {{ link }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  width: 200px;
  padding: 0 16px;
}
a {
  display: flex;
  font-weight: 400;
  color: #757575;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 16px;
  align-items: baseline;
}
.nuxt-link-exact-active {
  color: var(--black);
}
a:first-child {
  color: var(--black);
  font-size: 18px;
  font-variation-settings: 'wght' 700;
  margin-bottom: 32px;
}
span {
  font-variation-settings: 'wght' 400;
  color: #757575;
  font-size: 13px;
  padding-left: 0.5em;
}
.links {
  position: sticky;
  top: 25px;
}
</style>
