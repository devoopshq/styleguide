module.exports = {
  modern: true,
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'DevOops Style Guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '###' },
      /*
        Open Graph
        http://ogp.me/

        Twitter Card Validator
        https://cards-dev.twitter.com/validator

        Facebook Debug
        https://developers.facebook.com/tools/debug/sharing
      */
      // { hid: 'og:image', property: 'og:image', content: 'https://devoops.app/icons/og.jpeg' },
      // { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      // { hid: 'og:image:height', property: 'og:image:height', content: '628' },
      // { hid: 'og:title', property: 'og:title', content: 'DevOops' },
      // { hid: 'og:description', property: 'og:description', content: '###' },
      // { hid: 'og:url', property: 'og:url', content: `https://devoops.app/` }
    ],
    link: [
      // { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://devoops.app/icons/apple-touch-icon.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://devoops.app/icons/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://devoops.app/icons/favicon-16x16.png' },
      // { rel: 'manifest', href: 'https://devoops.app/icons/manifest.json' },
      // { rel: 'mask-icon', href: 'https://devoops.app/icons/safari-pinned-tab.svg', color: '#000000' },
      // { rel: 'shortcut icon', href: 'https://devoops.app/icons/favicon.ico' }
      // Specs: https://wicg.github.io/priority-hints/
      // Origin Trail: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/jpeSdM897Xw
      { rel: 'preload', href: 'fonts/Inter.var.ttf', as: 'font', crossorigin: 'anonymous', importance: 'low' }
    ]
  },

  modules: ['nuxt-interpolation'],

  build: {
    parallel: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    resourceHints: false,
    http2: {
      push: true
    }
  }
}
