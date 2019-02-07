<template>
  <nav>
    <NuxtLink to="/">
      DevOops <small>v0.1.0</small>
    </NuxtLink>
    <NuxtLink to="/font">
      Variable Font
    </NuxtLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  height: 64px;
  display: flex;
  align-items: center;
  max-width: 512px;
  margin: 0 auto;
}
a {
  font-weight: 400;
  color: var(--gray2);
  font-size: 14px;
  text-decoration: none;
  margin-right: 16px;
}
.nuxt-link-exact-active {
  color: var(--black);
}
a:first-child {
  font-weight: 700;
}
small {
  color: var(--gray2);
}
</style>
