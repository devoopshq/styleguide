<template>
  <nav>
    <div class="links">
      <NuxtLink to="/">
        DevOops <span class="version"> v0.1.0</span>
      </NuxtLink>

      <span class="label">
        Typography
      </span>
      <NuxtLink v-for="(link, index) in links.typography" :key="index" :to="'/' + link.toLowerCase()">
        {{ link }}
      </NuxtLink>

      <span class="label">
        Components
      </span>
      <NuxtLink v-for="(link, index) in links.components" :key="index" :to="'/' + link.toLowerCase()">
        {{ link }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  width: 256px;
  padding: 0 16px;
}
a {
  display: flex;
  font-weight: 400;
  color: var(--black);
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 8px;
  align-items: baseline;
  padding: 8px;
  border-radius: 4px;
}
a:hover {
  background-color: var(--gray);
}
.nuxt-link-exact-active {
  color: var(--black);
  background-color: var(--gray);
  font-variation-settings: 'wght' 600;
}
/* .nuxt-link-prefetched:after { content: '###'; } */
a:first-child {
  color: var(--black);
  font-size: 18px;
  font-variation-settings: 'wght' 700;
  margin-bottom: 32px;
}
.version {
  font-variation-settings: 'wght' 400;
  color: #757575;
  font-size: 13px;
  padding-left: 0.5em;
}
.label {
  display: block;
  color: var(--gray3);
  font-size: 13px;
  padding: 16px 8px;
}
.links {
  position: sticky;
  top: 25px;
}
</style>
