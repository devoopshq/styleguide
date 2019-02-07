<template>
  <nav>
    <NuxtLink to="/">
      DevOops <small>v0.1.0</small>
    </NuxtLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  height: 64px;
  display: flex;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px;
}
a {
  font-weight: 400;
  color: #757575;
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
  color: #757575;
}
</style>
