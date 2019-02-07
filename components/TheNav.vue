<template>
  <nav>
    <NuxtLink to="/">
      DevOops
    </NuxtLink>
    <NuxtLink to="/font">
      Font
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
  font-weight: 700;
  color: var(--black);
  font-size: 13px;
  text-decoration: none;
}
</style>
