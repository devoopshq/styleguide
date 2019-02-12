<template>
  <div>
    <AppDoc>
      <template #left>
        <AppLabel text="14px — Regular" />
        <AppCard>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </AppCard>

        <AppLabel text="14px — Bold" />
        <AppCard>
          <div class="w700">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </AppCard>

        <AppLabel text="Label" />
        <AppCard>
          <Content v-interpolation :content="content" />
        </AppCard>
      </template>

      <template #right>
        <AppLabel text="Props" />
        <TerminalInput content="content: {
    type: String,
    required: true
  }" />
        <AppLabel text="Directives (optional)" />
        <TerminalInput content="v-interpolation" />
        <AppLabel text="Path" />
        <TerminalInput content="@/components/Example" />

        <AppLabel text="Usage" />
        <TerminalInput :content="escapeHtml('<Example v-interpolation :content=&quot;content&quot; />')" />
      </template>

    </AppDoc>
  </div>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/paragraphs/')
  },

  components: {
    Content: () => import('@/components/Content'),
    AppCard: () => import('@/components/AppCard'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc'),
    TerminalInput: () => import('@/components/code/TerminalInput')
  },

  data: () => ({
    content: '<p>Looorem <strong>ipsum</strong> dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/font">internal link</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external link</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank link</a> nisi ut aliquip ex ea commodo consequat.</p>'
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
