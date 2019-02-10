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
        <div class="copy">
          <TerminalInput content="@/components/Example" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>
        </div>

        <AppLabel text="Usage" />
        <div class="copy">
          <TerminalInput :content="escapeHtml('<Example />')" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>
        </div>
        <AppEdit href="/devoopshq/styleguide/blob/master/pages/paragraphs.vue" />
      </template>

    </AppDoc>
  </div>
</template>

<script>
import escape from '@/helpers/escape'
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import Content from '@/components/Content'
import AppCard from '@/components/AppCard'
import AppEdit from '@/components/AppEdit'
import AppDoc from '@/components/AppDoc'
import TerminalInput from '@/components/code/TerminalInput'

export default {
  components: {
    Heading1,
    Content,
    AppCard,
    AppEdit,
    AppLabel,
    AppDoc,
    TerminalInput
  },

  data: () => ({
    content: '<p>Looorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/font">internal link</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external link</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank link</a> nisi ut aliquip ex ea commodo consequat.</p>'
  }),

  head: () => ({
    title: 'Paragraphs'
  }),
  methods: {
    escapeHtml: value => escape(value)
  }
}
</script>

<style lang="postcss" scoped>
.copy {
  display: flex;
  align-items: center;
}
.copy svg {
  margin-left: auto;
  opacity: 0.24;
}
p {
  font-size: 14px;
  line-height: 1.714;
  font-weight: 400;
}
.w700 { font-variation-settings: 'wght' 700; }
.black {
  background-color: var(--black);
  color: var(--white);
}
</style>
