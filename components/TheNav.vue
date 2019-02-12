<template>
  <nav>
    <div class="links">
      <NuxtLink to="/">{{ title }}</NuxtLink>

      <span class="label">
        Typography
      </span>

      <NuxtLink to="/headings">Headings</NuxtLink>
      <NuxtLink to="/lists">Lists</NuxtLink>
      <NuxtLink to="/paragraphs">Paragraphs</NuxtLink>
      <NuxtLink to="/typeface">Typeface</NuxtLink>
      <NuxtLink to="/variable">Variable</NuxtLink>

      <span class="label">
        Components
      </span>

      <NuxtLink to="/collapse">Collapse</NuxtLink>
      <NuxtLink to="/buttons">Buttons</NuxtLink>
      <NuxtLink to="/file-tree">File Tree</NuxtLink>
      <NuxtLink to="/images">Images</NuxtLink>
      <NuxtLink to="/toggle">Toggle</NuxtLink>
      <NuxtLink to="/toasts">Toasts</NuxtLink>
      <NuxtLink to="/spinner">Spinner</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.title
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
  background-color: var(--background-color);
}
.links {
  position: sticky;
  top: 0;
}
a {
  text-align: right;
  display: flex;
  font-weight: 400;
  color: rgb(var(--color));
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 8px;
  align-items: baseline;
  padding: 8px 32px;
}
.nuxt-link-exact-active {
  color: rgb(var(--color));
  border-left: 3px solid rgb(var(--color));
  padding: 8px 29px;
  font-variation-settings: 'wght' 600;
}
/* .nuxt-link-prefetched:after { content: '###'; } */
a:first-child {
  color: rgb(var(--color));
  font-size: 18px;
  font-variation-settings: 'wght' 600;
  margin-bottom: 8px;
  padding: 8px 32px;
  border-left: none;
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
    padding-bottom: 16px;
  }
  a,
  a:first-child,
  .label {
    padding: 8px 16px;
  }
  .nuxt-link-exact-active {
    padding: 8px 13px;
  }
}
</style>
