<template>
  <div>
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

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import Content from '@/components/Content'
import AppCard from '@/components/AppCard'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Heading1,
    Content,
    AppCard,
    AppEdit,
    AppLabel
  },

  data: () => ({
    content: '<p>Looorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/font">internal link</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external link</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank link</a> nisi ut aliquip ex ea commodo consequat.</p>'
  }),

  head: () => ({
    title: 'Paragraphs'
  })
}
</script>

<style lang="postcss" scoped>
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
