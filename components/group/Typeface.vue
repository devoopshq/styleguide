<template>
  <div>
    <H1 content="Typeface" />
    <small>Sans</small>
    <div class="card">
      <p class="w100">Thin - 100</p>
      <p class="w200">Extra Light - 200</p>
      <p class="w300">Light - 300</p>
      <p class="w400">Regular - 400</p>
      <p class="w500">Medium - 500</p>
      <p class="w600">Semi Bold - 600</p>
      <p class="w700">Bold - 700</p>
      <p class="w800">Extra Bold - 800</p>
      <p class="w900">Black - 900</p>
    </div>

    <small>Mono</small>
    <div class="card">
      <span class="mono">DevOops - 400</span><br>
      <span class="mono m600">DevOops - 600</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1')
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
.m600 {
  font-weight: 600;
}
.card {
  /* outline: 1px dashed; */
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin-top: 16px;
  margin-bottom: 32px;
}
.card:hover {
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
}
</style>
