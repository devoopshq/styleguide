<template>
  <div>
    <H1 content="<strong>The Inter</strong> Font Family" />
    <div class="fieldset">
      <label for="weight">Weight <strong>{{ cssVariables["--weight"] }}</strong></label>
      <!-- <input id="weight" v-model="weight" type="range" min="100" max="900"> -->
      <InputTypeRange :value.sync="weight" :min="100" :step="0" :max="900" range="true" />
    </div>
    <div class="fieldset">
      <label for="slant">Slant <strong>{{ cssVariables["--slant"] }}°</strong> <span>(angle)</span></label>
      <InputTypeRange :value.sync="slant" :min="0" :step="1" :max="10" range="true" />
    </div>
    <div class="fieldset">
      <label for="size">Size <strong>{{ cssVariables["--size"] }}</strong></label>
      <InputTypeRange :value.sync="size" :min="11" :step="1" :max="112" range="true" />
    </div>
    <div class="fieldset">
      <label for="tracking">Tracking <strong>{{ cssVariables["--letter-spacing"] }}</strong> <span>(space between letters)</span></label>
      <InputTypeRange :value.sync="letterSpacing" :min="-0.1" :step="0.001" :max="0.1" range="true" />
    </div>
    <div class="fieldset">
      <label for="lineHeight">Line Height <strong>{{ cssVariables["--line-height"] }}</strong></label>
      <InputTypeRange :value.sync="lineHeight" :min="0.7" :step="0.01" :max="2" range="true" />
    </div>
    <div :style="cssVariables" class="card">
      <p class="var">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~</p>
    </div>
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
      H1: () => import('@/components/headings/H1'),
      InputTypeRange: () => import('@/components/forms/InputTypeRange')
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
  padding-bottom: 32px;
}
label span {
  color: var(--gray3);
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

.card {
  /* outline: 1px dashed; */
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin: 16px -32px 32px -32px;
}
.card:hover {
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
}
</style>
