<template>
  <div :style="theme" class="default">
    <TheNav />
    <main role="main">
      <Nuxt />
    </main>
    <AppTheme class="source" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {
    TheNav: () => import('@/components/TheNav'),
    AppTheme: () => import('@/components/AppTheme')
  },

  computed: {
    theme () {
      const [color, backgroundColor] =  this.$store.state.theme
      return {
        '--color': color,
        '--background-color': backgroundColor
      }
    }
  },

  head () {
    return {
      meta: [
        { hid: 'theme-color', name: 'theme-color', content: this.rgbToHex(this.theme['--background-color'].split(',')) },
      ]
    }
  },

  beforeMount () { this.loadFont() },

  methods: {
    rgbToHex: value => {
      const x = value.map(y => parseInt(y))
      return '#' + ((1 << 24) + (x[0] << 16) + (x[1] << 8) + x[2]).toString(16).slice(1)
    },
    async loadFont () {
      const font = new FontFace(
        'Inter var',
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
  --magenta-aa: #50e3c2; /* #c504ec; */
  --red-aa: #ec0000;
  --orange: #f5a623;
  --yellow: #f8e71c;
  --green: #50e3c2;
  /* Accents */
  --gray: #efefef;
  --gray1: #eaeaea;
  --gray2: #999999;
  --gray3: #666666;
  --gray4: #333333;

  --letter-spacing: -0.011em;
  ----line-height: 1.1235;
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
}
@-ms-viewport {
  width: device-width;
}
body {
  transition: all 250ms;
  margin: 0;
}
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
#__nuxt {
  font-family: var(--sans-serif);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
  background-color: rgb(var(--background-color));
  color: rgb(var(--color));
}
#__nuxt.fontLoaded {
  font-family: "Inter var", sans-serif;
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  /* font-named-instance: 'Regular'; */
  /* font-variation-settings: 'wght' 400, 'slnt' -0.011em; */
}
.default {
  background-color: rgb(var(--background-color));
  color: rgb(var(--color));
  display: flex;
  min-height: 100%;
}
main {
  padding-top: 87px;
  flex: 1;
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
.source {
  position: fixed;
  top: 34px;
  right: 24px;
}
@media (max-width: 512px) {
  .default {
    width: 100%;
    flex-direction: column;
  }
  main {
    max-width: none;
    padding: 16px;
  }
  .source {
    top: 29px;
    right: 16px;
  }
}
</style>
