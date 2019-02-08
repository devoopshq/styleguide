<template>
  <div>
    <Heading1>Typeface</Heading1>
    <small>Sans</small>
    <AppCard>
      <p class="w100">Thin - 100</p>
      <p class="w200">Extra Light - 200</p>
      <p class="w300">Light - 300</p>
      <p class="w400">Regular - 400</p>
      <p class="w500">Medium - 500</p>
      <p class="w600">Semi Bold - 600</p>
      <p class="w700">Bold - 700</p>
      <p class="w800">Extra Bold - 800</p>
      <p class="w900">Black - 900</p>
    </AppCard>

    <small>Mono</small>
    <AppCard>
      <span class="mono">DevOops - 400</span><br>
      <span class="mono m700">DevOops - 700</span>
    </AppCard>

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Heading1,
    AppCard,
    AppEdit
  },

  head () {
    return {
      title: 'Typeface'
    }
  }
}
</script>

<style lang="postcss" scoped>
p {
  font-size: 32px;
  margin: 8px 0;
}
.w100 { font-variation-settings: 'wght' 100; }
.w200 { font-variation-settings: 'wght' 200; }
.w300 { font-variation-settings: 'wght' 300; }
.w400 { font-variation-settings: 'wght' 400; }
.w500 { font-variation-settings: 'wght' 500; }
.w600 { font-variation-settings: 'wght' 600; }
.w700 { font-variation-settings: 'wght' 700; }
.w800 { font-variation-settings: 'wght' 800; }
.w900 { font-variation-settings: 'wght' 900; }
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
.mono {
  font-family: var(--monospace);
}
.m700 {
  font-weight: 700;
}
</style>
