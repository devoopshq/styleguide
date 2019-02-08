<template>
  <dl class="accordion" role="presentation">
    <accordionItem
      v-for="(item, index) in content"
      :id="id"
      :index="index"
      :key="index"
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
      required: true
    },
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.accordion {
  border-top: 1px solid rgba(10, 10, 10, 0.1);
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  margin: 16px 0;
  /* outline: 1px dashed #000; */
}
</style>
