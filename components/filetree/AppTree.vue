<template>
  <li v-if="node" @click="toggle(node.size)">
    <div class="a">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g v-if="isFolder">
          <path v-if="!open" :fill="node.size === 0 ? '#ccc' : fill" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
          <path v-else :fill="fill" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
        </g>
        <path v-else :fill="fill" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>

      <span class="test">
        <span :class="{open, isFolder}">{{ node.name }}</span>
        <small v-if="!isFolder">{{ size(node.size) }}</small>
      </span>
    </div>

    <ul v-if="open">
      <NodeTree v-for="(child, index) in node.children" :key="index" :node="child" :open="open" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NodeTree',

  props: {
    node: {
      type: Object,
      default: () => {}
    },
    fill: {
      type: String,
      default: '#000'
    },
    open: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isFolder () {
      return this.node.type === 'directory'
    }
  },

  methods: {
    toggle (size) {
      if (this.isFolder && size !== 0) {
        this.open = !this.open
      }
    },
    size (value) {
      const i = value === 0 ? 0 : Math.floor(Math.log(value) / Math.log(1024))
      return (value / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  list-style: none;
  padding-left: 48px;
  margin: 0;
}
svg {
  margin: 12px;
  vertical-align: middle;
}
span {
  margin-left: 8px;
}
span:hover {
  font-weight: 600;
}
span:hover small {
  font-variation-settings: 'wght' 400;
  color: #000;
}
li {
  font-size: 14px;
  user-select: none;
}
li ul li {
  position: relative;
}
li ul li:before {
  left: -24px;
  position: absolute;
  content: '';
  width: 1px;
  height: 100%;
  background-color: rgba(0,0,0,0.12);
  display: block;
}
.open {
  font-variation-settings: 'wght' 400;
}
.a {
  display: flex;
  align-items: center;
}
.test {
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.a .isFolder {
  font-variation-settings: 'wght' 700;
  color: #000;
}
small {
  color: #999;
}
small.open {
  color: #000;
  font-variation-settings: 'wght' 400;
}
</style>
