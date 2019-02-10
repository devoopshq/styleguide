<template>
  <nav>
    <div class="links">
      <NuxtLink to="/">/</NuxtLink>

      <span class="label">
        Typography
      </span>
      <NuxtLink
        v-for="(link, index) in links.typography"
        :key="index"
        :to="'/' + link.toLowerCase()"
      >
        {{ link.toLowerCase() }}
      </NuxtLink>

      <span class="label">
        Components
      </span>
      <NuxtLink
        v-for="(link, index) in links.components"
        :key="index"
        :to="'/' + link.toLowerCase()"
      >
        {{ link.toLowerCase() }}
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
.logo {
  width: 32px;
  height: 32px;
}
nav {
  width: 256px;
  padding-top: 24px;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
a {
  display: flex;
  font-weight: 400;
  color: var(--black);
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 8px;
  align-items: baseline;
  padding: 8px 32px;
}
.nuxt-link-exact-active {
  color: var(--black);
  border-left: 3px solid var(--black);
  padding: 8px 29px;
  font-variation-settings: 'wght' 600;
}
/* .nuxt-link-prefetched:after { content: '###'; } */
a:first-child {
  color: var(--black);
  font-size: 18px;
  font-variation-settings: 'wght' 600;
  margin-bottom: 8px;
}
.version {
  /* font-variation-settings: 'wght' 600; */
  /* color: #757575; */
/*   font-size: 13px; */
}
.label {
  display: block;
  color: var(--gray3);
  font-size: 13px;
  padding: 16px 32px;
  min-height: 100%;
}
@media (max-width: 512px) {
  nav {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }
}
</style>
