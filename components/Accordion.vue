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
  border-top: 1px solid rgba(var(--color), 0.12);
  border-bottom: 1px solid rgba(var(--color), 0.12);
  margin: 16px 0;
}
</style>
