module.exports = {
  modern: true,
  head: {
    htmlAttrs: { lang: 'en' },
    titleTemplate: '%s - DevOops Style Guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '###' },
      { name: 'msapplication-TileColor',  content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
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
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#8d8e8e' },
      // Specs: https://wicg.github.io/priority-hints/
      // Origin Trail: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/jpeSdM897Xw
      // importance: 'low'
      { rel: 'preload', href: 'fonts/Inter.var.ttf', as: 'font', crossorigin: 'anonymous' }
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
  },
  router: {
    // https://github.com/nuxt/nuxt.js/pull/4574
    // To disable prefetching, uncomment the line
    // prefetchLinks: false

    // Activate prefetched class (default: false)
    // Used to display the check mark next to the prefetched link
    // linkPrefetchedClass: 'nuxt-link-prefetched'
  }
}
