<template>
  <div>
    <Heading1>
      <strong>The Inter</strong> Font Family
    </Heading1>
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

    <AppCard :style="cssVariables">
      <p class="var">
        ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~
      </p>
    </AppCard>

    <div class="resources">
      <p>
        The Inter Font family
        <a href="https://rsms.me/inter/">
          rsms.me/inter
        </a>
      </p>
      <p>
        Variable Fonts
        <a href="https://caniuse.com/#feat=variable-fonts">
          caniuse.com
        </a>
      </p>
      <p>
        Specification
        <a href="https://drafts.csswg.org/css-fonts-4/#font-variation-settings-def">
          drafts.csswg.org
        </a>
      </p>
      <p>
        How to use variable fonts in the real world
        <a href="https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604">
          medium.com
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import InputTypeRange from '@/components/forms/InputTypeRange'
import AppCard from '@/components/AppCard'

export default {
  components: {
    Heading1,
    InputTypeRange,
    AppCard
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
  },

  head () {
    return {
      title: 'Variable Font'
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> h1 { margin-bottom: 48px; }
.fieldset {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}
.resources {
  font-size: 13px;
  color: var(--gray3);
}
.resources a {
  color: var(--blue-aa);
}
@supports (font-variation-settings: 'wdth' 200) {
  .var {
    font-size: var(--size);
    letter-spacing: var(--letter-spacing);
    line-height: var(--line-height);
    font-variation-settings: 'wght' var(--weight), 'slnt' var(--slant);
    word-break: break-all;
  }
}
@supports not (font-variation-settings: 'wdth' 200) {}

</style>
