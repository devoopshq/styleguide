<template>
  <div :style="cssVariables" class="container">
    <H1 content="<strong>The Inter</strong> Font Family" />
    <div class="fieldset">
      <label for="weight">Weight {{ cssVariables["--weight"] }} (in the range of 100 to 900)</label>
      <input id="weight" v-model="weight" type="range" min="100" max="900">
    </div>
    <div class="fieldset">
      <label for="slant">Slant {{ cssVariables["--slant"] }}° (angle in the range of 0° to 10°)</label>
      <input id="slant" v-model="slant" type="range" min="0" max="10">
    </div>
    <div class="fieldset">
      <label for="size">Size {{ cssVariables["--size"] }}</label>
      <input id="size" v-model="size" type="range" min="11" max="112">
    </div>
    <div class="fieldset">
      <label for="tracking">Tracking {{ cssVariables["--letter-spacing"] }} (space between letters)</label>
      <input id="tracking" v-model="letterSpacing" type="range" min="-0.1" max="0.1" step="0.001">
    </div>
    <div class="fieldset">
      <label for="lineHeight">Line Height {{ cssVariables["--line-height"] }}</label>
      <input id="lineHeight" v-model="lineHeight" type="range" min="0.7" max="2" step="0.01">
    </div>
    <p class="var">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~</p>
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
  export default {
    components: {
      H1: () => import('@/components/headings/H1')
    },
    data () {
      return {
        size: 32,
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
label {
  padding-bottom: 8px;
}
.resources {
  font-size: 13px;
  color: var(--gray3);
}
.resources a {
  color: var(--blue-aa);
}
.container {
  max-width: 544px;
  margin: 0 auto;
  padding: 0 16px;
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
