<template>
  <li>
    <div
      :class="['file', {bold: isFolder}]"
      @click="toggle"
      @dblclick="changeType">
      <svg v-if="isFolder" width="24" height="24" viewBox="0 0 24 24">
        <path v-if="!open" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path v-else d="M19 13H5v-2h14v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      {{ model.name }}
    </div>
    <ul v-show="open" v-if="isFolder">
      <AppTree
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      />
    </ul>
  </li>
</template>

<script>
import Vue from 'vue'
import AppTree from '@/components/filetree/AppTree'

export default {
  name: 'AppTree',
  components: { AppTree },
  props: {
    model: {
      type: Object,
      default: () => {}
    }
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.open = true
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  margin: 0;
  list-style: none;
}
.file {
  display: flex;
  align-items: center;
}
.bold {
  font-variation-settings: 'wght' 700;
}
</style>
