<template lang="pug">
.container
  H1(content="Lorem <strong>Ipsum</strong> Dolore")
  H2(content="Lorem ipsum dolore")
  H3(content="Lorem ipsum dolore")
  P(content="Lorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
  P(content="<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
  UL(:lists="lists")
  OL(:lists="lists")
  TerminalInput
  TerminalOutput
  ButtonPrimary(action="cta")
  ButtonPrimary(action="cta" :warning="true")
  ButtonPrimary(action="cta" disabled)
  ButtonSecondary(action="cta")
  ButtonLoading
  ButtonAbort(action="cta")
  ButtonAbort(:warning="true")
</template>

<script>
import H1 from '@/components/headings/H1'
import H2 from '@/components/headings/H2'
import H3 from '@/components/headings/H3'
import P from '@/components/paragraphs/P'
import UL from '@/components/lists/UL'
import OL from '@/components/lists/OL'
import TerminalInput from '@/components/code/TerminalInput'
import TerminalOutput from '@/components/code/TerminalOutput'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import ButtonLoading from '@/components/buttons/ButtonLoading'
import ButtonAbort from '@/components/buttons/ButtonAbort'

export default {
  components: {
    H1,
    H2,
    H3,
    P,
    UL,
    OL,
    TerminalInput,
    TerminalOutput,
    ButtonPrimary,
    ButtonSecondary,
    ButtonLoading,
    ButtonAbort
  },

  data () {
    return {
      lists: ['Item', 'Item', 'Item']
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 auto
button
  margin-right 4px
  &:last-child
    margin-right 0
</style>
