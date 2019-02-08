<template>
  <div>
    <H1 content="Headings" />
    <div class="card">
      <small>32px — H1 Heading</small>
      <H1 content="Lorem <strong>Ipsum</strong> Dolore" />
    </div>
    <div class="doc">
      <table>
        <tbody>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td><code>String</code></td>
            <td><code>null</code></td>
          </tr>
        </tbody>
      </table>
      <small>Path</small>
      <TerminalInput content="@/components/headings/H1" />
      <small>Usage</small>
      <!-- eslint-disable-next-line -->
      <TerminalInput content='<H1 content="Lorem <strong>Ipsum</strong> Dolore" />' />
    </div>


    <div class="card">
      <small>24px — H2 Heading</small>
      <H2>Lorem ipsum dolore</H2>
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
      <TerminalInput content="@/components/headings/H2" />
      <small>Example</small>
      <TerminalInput content="<H2>Lorem ipsum dolore</H2>" />
    </div>


    <div class="card">
      <small>18px — H3 Heading</small>
      <H3>Lorem ipsum dolore</H3>
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
      <TerminalInput content="@/components/headings/H3" />
      <small>Example</small>
      <TerminalInput content="<H3>Lorem ipsum dolore</H3>" />
    </div>

    <div class="card">
      <small>16px — H4 Heading</small>
      <H4>Lorem ipsum dolore</H4>
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
      <TerminalInput content="@/components/headings/H4" />
      <small>Example</small>
      <TerminalInput content="<H4>Lorem ipsum dolore</H4>" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1'),
    H2: () => import('@/components/headings/H2'),
    H3: () => import('@/components/headings/H3'),
    H4: () => import('@/components/headings/H4'),
    TerminalInput: () => import('@/components/code/TerminalInput')
  },

  head () {
    return {
      title: 'Headings'
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
