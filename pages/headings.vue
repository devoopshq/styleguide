<template>
  <div>
    <Heading1>Headings</Heading1>
    <div class="card">
      <small>32px — H1 Heading</small>
      <Heading1>Lorem <strong>Ipsum</strong> Dolore</Heading1>
    </div>
    <div class="doc">
      <table>
        <tbody>
          <tr>
            <th>Slot</th>
          </tr>
        </tbody>
      </table>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading1" />
      <small>Usage</small>
      <!-- eslint-disable-next-line -->
      <TerminalInput :content="escapeHtml('<Heading1>\n  Lorem <strong>Ipsum</strong> Dolore\n</Heading1>')" />
    </div>


    <div class="card">
      <small>24px — H2 Heading</small>
      <Heading2>Lorem ipsum dolore</Heading2>
    </div>

    <div class="doc">
      <table>
        <tbody>
          <tr>
            <th>Slot</th>
          </tr>
        </tbody>
      </table>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading2" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading2>\n  Lorem ipsum dolore\n</Heading2>')" />
    </div>


    <div class="card">
      <small>18px — H3 Heading</small>
      <Heading3>Lorem ipsum dolore</Heading3>
    </div>

    <div class="doc">
      <table>
        <tbody>
          <tr>
            <th>Slot</th>
          </tr>
        </tbody>
      </table>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading3" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading3>\n  Lorem ipsum dolore\n</Heading3>')" />
    </div>

    <div class="card">
      <small>16px — H4 Heading</small>
      <Heading4>Lorem ipsum dolore</Heading4>
    </div>

    <div class="doc">
      <table>
        <tbody>
          <tr>
            <th>Slot</th>
          </tr>
        </tbody>
      </table>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading4" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading4>\n  Lorem ipsum dolore\n</Heading4>')" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Heading1: () => import('@/components/headings/Heading1'),
    Heading2: () => import('@/components/headings/Heading2'),
    Heading3: () => import('@/components/headings/Heading3'),
    Heading4: () => import('@/components/headings/Heading4'),
    TerminalInput: () => import('@/components/code/TerminalInput')
  },

  head () {
    return {
      title: 'Headings'
    }
  },

  methods: {
    escapeHtml(unsafe) {
      return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;")
   }
  }
}
</script>

<style lang="postcss" scoped>
.doc {
  margin-bottom: 32px;
}
table { margin-bottom: 16px; }
th {
  text-align: left;
}
th,
td {
  padding-right: 16px;
  padding-bottom: 8px;
}
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
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
