<template>
  <div class="default">
    <TheNav :links="links" />
    <main role="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: { TheNav },

  data: () => ({
    links: [
      'Headings',
      'Lists',
      'Paragraphs',
      'Typeface',
      'Font'
    ]
  }),

  beforeMount () { this.loadFont() },

  methods: {
    async loadFont () {
      const font = new FontFace(
        'Inter',
        'url(./fonts/Inter.var.ttf)'
      )
      await font.load()
      document.fonts.add(font)
      document.getElementById('__nuxt').classList.add('fontLoaded')
    }
  }
}
</script>

<style lang="postcss">
:root {
  --sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --monospace: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  /* Primary */
  --black: #000;
  --white: #fff;
  /* Secondary */
  --blue: #0076ff;
  --blue-aa: #0070f3;
  --blue-aaa: #0055b7;
  --magenta: #d400ff;
  --magenta-aa: #c504ec;
  --red-aa: #ec0000;
  --orange: #f5a623;
  --yellow: #f8e71c;
  --green: #50e3c2;
  /* Accents */
  --gray: #fafafa;
  --gray1: #eaeaea;
  --gray2: #999999;
  --gray3: #666666;
  --gray4: #333333;
}
*::after {
  box-sizing: inherit;
}
html {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.15;
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
}
@-ms-viewport {
  width: device-width;
}
body {
  color: var(--black);
  background-color: var(--white);
  margin: 0 0 25vh 0;
  min-height: 100%;
}
#__nuxt {
  font-family: var(--sans-serif);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
}
#__nuxt.fontLoaded {
  font-family: Inter;
  font-variation-settings: 'wght' var(--weight), 'slnt' var(--slant);
}
.default {
  display: flex;
  max-width: 768px;
  margin: 0 auto;
}
main {
  flex: 1;
  margin-left: 32px;
}
[tabindex="-1"]:focus {
  outline: none !important;
}
::selection {
  background-color: var(--yellow);
  color: var(--black);
}
.page-enter-active,
.page-leave-active {
  transition: all .2s ease;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
