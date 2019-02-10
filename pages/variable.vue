<template>
  <AppDoc>
    <template #left>
      <Heading1>The <strong>Inter</strong> Font Family</Heading1>

      <AppCard :style="cssVariables">
        <p class="var">
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~
        </p>
      </AppCard>
    </template>

    <template #right>
      <div class="fieldset">
        <InputTypeRange
          id="fontWeight"
          :value.sync="weight"
          :min="100"
          :step="0"
          :max="900"
          :label="'Weight ' + cssVariables['--weight']"
          :range="true"
        />
      </div>
      <div class="fieldset">
        <InputTypeRange
          id="fontSlant"
          :value.sync="slant"
          :min="0"
          :step="1"
          :max="10"
          :label="'Slant (angle) ' + cssVariables['--slant'] + '°'"
          :range="true"
        />
      </div>
      <div class="fieldset">
        <InputTypeRange
          id="fontSize"
          :value.sync="size"
          :min="11"
          :step="1"
          :max="112"
          :label="'Size ' + cssVariables['--size']"
          :range="true"
        />
      </div>
      <div class="fieldset">
        <InputTypeRange
          id="fontSpacing"
          :value.sync="letterSpacing"
          :min="-0.1"
          :step="0.001"
          :max="0.1"
          :label="'Tracking (space between letters) ' + cssVariables['--letter-spacing']"
          :range="true"
        />
      </div>
      <div class="fieldset">
        <InputTypeRange
          id="fontLineHeight"
          :value.sync="lineHeight"
          :min="0.7"
          :step="0.01"
          :max="2"
          :label="'Line Height ' + cssVariables['--line-height']"
          :range="true"
        />
      </div>
    </template>
  </AppDoc>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import InputTypeRange from '@/components/forms/InputTypeRange'
import AppCard from '@/components/AppCard'
import AppDoc from '@/components/AppDoc'

export default {
  components: {
    Heading1,
    InputTypeRange,
    AppCard,
    AppDoc
  },
  data () {
    return {
      size: 48,
      letterSpacing: -0.03,
      lineHeight: 1.1,
      weight: 600,
      slant: 0
    }
  },
  computed: {
    cssVariables () {
      return {
        '--size': this.size + 'px',
        '--letter-spacing': this.letterSpacing +'em',
        '--line-height': this.lineHeight,
        '--weight': this.weight,
        '--slant': this.slant
      }
    }
    //  6   0.043
    //  7   0.032
    //  8   0.024
    //  9   0.016
    // 10   0.01
    // 11   0.005
    // 12   0
    // 13  -0.0025
    // 14  -0.006
    // 15  -0.009
    // 16  -0.011
    // 17  -0.013
    // 18  -0.014
    // 20  -0.017
    // 24  -0.019
    // 30  -0.021
    // 40  -0.022
    // 80  -0.022
  },

  head: () => ({
    title: 'Variable'
  })
}
</script>

<style lang="postcss" scoped>
>>> h1 { margin-bottom: 48px; }
.fieldset {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}
@supports (font-variation-settings: normal) {
  .var {
    font-size: var(--size);
    letter-spacing: var(--letter-spacing);
    line-height: var(--line-height);
    font-variation-settings: 'wght' var(--weight), 'slnt' var(--slant);
    word-break: break-all;
  }
}
@supports not (font-variation-settings: normal) {}

</style>
