<template>
  <div class="container">
    <aside>
      <div class="asideContent">
        <ul>
          <li v-for="(option, index) in options" :key="index" @click="types(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </aside>
    <div class="content">
      <component v-if="component" :is="component" />

      <!--       <small>14px — Paragraphs</small>
      <Content :content="content" />

      <small>Terminal Input</small>
      <TerminalInput content="npm --version" />
      <small>Terminal Output</small>
      <TerminalOutput content="6.4.1" />
      <small>Button — Primary</small>
      <ButtonPrimary action="action" />
      <small>Button — Warning</small>
      <ButtonPrimary :warning="true" action="action" />
      <small>Button — Disabled</small>
      <ButtonPrimary action="action" disabled="disabled" />
      <small>Button — Secondary</small>
      <ButtonSecondary action="action" />
      <small>Button — Loading</small>
      <ButtonLoading />
      <small>Button — Abort</small>
      <ButtonAbort action="action" />
      <small>Button — Abort Warning</small>
      <ButtonAbort :warning="true" action="action" />
      <small>Spinner</small>
      <Spinner />
      <small>Spinner Custom</small>
      <Spinner size="48" /> -->
    </div>
  </div>
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
      options: [
        'Headings',
        'Lists',
        'Paragraphs',
        'Typeface',
        'VariableFont'
      ],
      type: 'Headings',
      component: null,
      content: '<p>Looorem ipsum dolor sit amet, consectetur <code>devoops</code> elit, sed do <a href="/font">internal</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem <a href="https://example.com">external</a> dolor sit amet, consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="https://example.com" target="_blank">_blank</a> nisi ut aliquip ex ea commodo consequat.</p>'
    }
  },

  computed: {
    loader() {
      if (!this.type) {
        return null
      }
      return () => import(`@/components/group/${this.type}`)
    }
  },

  watch: {
    type () {
      this.component = () => this.loader()
    }
  },

  mounted() {
    this.loader()
      .then(() => this.component = () => this.loader())
      // .catch(() => /* this.component = () => import('templates/default') */ )
  },

  methods: {
    types (value) {
      this.type = value
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
}
aside {
  width: 200px;
}
.asideContent {
  position: sticky;
  top: 16px;
}
.asideContent ul {
  padding-left: 0;
  list-style-type: none;
}
.asideContent ul li {
  cursor: pointer;
  fomt-size: 14px;
  padding: 8px 0;
}
.content {
  margin-left: 24px;
  flex: 1;
}
button {
  margin-bottom: 0.5rem;
}
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
</style>
