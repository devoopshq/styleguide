<template>
  <dl class="accordion" role="presentation">
    <accordionItem
      v-for="(item, index) in content"
      :id="id"
      :index="index"
      :key="index"
      :multiple="multiple"
      :item="item"
      :group="index"
    />
  </dl>
</template>

<script>
import AccordionItem from '@/components/AccordionItem'
export default {
  components: {
    AccordionItem
  },
  props: {
    id: {
      type: String,
      default: 'id'
    },
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.accordion {
  margin: 0;
  /* outline: 1px dashed #000; */
}
</style>
