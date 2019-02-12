<template>
  <div>
    <AppDoc>
      <template #left>
        <Heading1>Paragraphs</Heading1>

        <AppLabel text="14px — Regular" />
        <AppCard>
          <Content v-interpolation :content="content" />
        </AppCard>

        <AppLabel text="14px — Bold" />
        <AppCard>
          <div class="w700">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </AppCard>
      </template>

      <template #right>
        <AppLabel text="Props" />
        <TerminalInput content="id: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }" />

        <AppLabel text="Path" />
        <TerminalInput content="@/components/Example" />

        <AppLabel text="Usage" />
        <TerminalInput :content="escapeHtml('<Example />')" />
      </template>

    </AppDoc>
  </div>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "paragraphs" */ '@/components/headings/Heading1'),
    Content: () => import(/* webpackChunkName: "paragraphs" */ '@/components/Content'),
    AppCard: () => import(/* webpackChunkName: "paragraphs" */ '@/components/AppCard'),
    AppLabel: () => import(/* webpackChunkName: "paragraphs" */ '@/components/AppLabel'),
    AppDoc: () => import(/* webpackChunkName: "paragraphs" */ '@/components/AppDoc'),
    TerminalInput: () => import(/* webpackChunkName: "paragraphs" */ '@/components/code/TerminalInput')
  },

  data: () => ({
    content: '<p>Looorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/font">internal link</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external link</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank link</a> nisi ut aliquip ex ea commodo consequat.</p>'
  }),

  head: () => ({ title: 'Paragraphs' }),

  methods: {
    escapeHtml: value => escape(value)
  }
}
</script>

<style lang="postcss" scoped>
p {
  font-size: 14px;
  line-height: 1.714;
  font-weight: 400;
}
.w700 { font-variation-settings: 'wght' 700; }
</style>
