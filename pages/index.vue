<template lang="pug">
.container
  small 32px — H1 Heading
  H1(content="Lorem <strong>Ipsum</strong> Dolore")
  small 24px — H2 Heading
  H2(content="Lorem ipsum dolore")
  small 18px — H3 Heading
  H3(content="Lorem ipsum dolore")
  small 16px — H4 Heading
  H4(content="Lorem ipsum dolore")
  small 14px — Paragraphs
  Content(:content="content")

  small Unordered List
  UL(:lists="lists")
  small Ordered List
  OL(:lists="lists")

  small Terminal Input
  TerminalInput(content="npm --version")
  small Terminal Output
  TerminalOutput(content="6.4.1")

  small Button — Primary
  ButtonPrimary(action="action") #[br]
  small Button — Warning
  ButtonPrimary(action="action" :warning="true") #[br]
  small Button — Disabled
  ButtonPrimary(action="action" disabled) #[br]
  small Button — Secondary
  ButtonSecondary(action="action") #[br]
  small Button — Loading
  ButtonLoading #[br]
  small Button — Abort
  ButtonAbort(action="action") #[br]
  small Button — Abort Warning
  ButtonAbort(action="action" :warning="true")
  small Spinner
  Spinner
  small Spinner Custom
  Spinner(size="48")
</template>

<script>
import H1 from '@/components/headings/H1'
import H2 from '@/components/headings/H2'
import H3 from '@/components/headings/H3'
import H4 from '@/components/headings/H4'
import Content from '@/components/Content'
import UL from '@/components/lists/UL'
import OL from '@/components/lists/OL'
import TerminalInput from '@/components/code/TerminalInput'
import TerminalOutput from '@/components/code/TerminalOutput'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import ButtonLoading from '@/components/buttons/ButtonLoading'
import ButtonAbort from '@/components/buttons/ButtonAbort'
import Spinner from '@/components/Spinner'

export default {
  components: {
    H1,
    H2,
    H3,
    H4,
    Content,
    UL,
    OL,
    TerminalInput,
    TerminalOutput,
    ButtonPrimary,
    ButtonSecondary,
    ButtonLoading,
    ButtonAbort,
    Spinner
  },

  data () {
    return {
      lists: ['Item', 'Item', 'Item'],
      content: '<p>Looorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/internal">internal</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank</a> nisi ut aliquip ex ea commodo consequat.</p>'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 auto
button
  margin-bottom 0.5rem
small
  display block
  margin-bottom 0.25rem
  color $gray2
</style>
