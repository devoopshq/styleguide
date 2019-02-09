<template>
  <div v-if="t.show" :class="['toast', { error: t.error, dark: t.dark, action: t.action }]">
    <span>{{ t.body }}</span>
    <ButtonPrimary v-if="t.action" />
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
export default {
  components: { ButtonPrimary },
  props: {
    toast: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    t() {
      return Object.assign({
        show: false,
        action: false,
        dark: false,
        error: false,
        body: ''
      }, this.toast)
    }
  }
}
</script>

<style lang="postcss" scoped>
.toast {
  background-color: var(--white);
  color: var(--black);
  font-size: 13px;
  padding: 17px 16px;
  border-radius: 4px;
  min-width: 256px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
  display: flex;
  align-items: baseline;
}
span {
  flex: 1;
}
.action {
  padding: 0 16px 8px 16px;
}
>>> button {
  margin-top: 8px;
  margin-left: 16px;
}
.dark {
  background-color: var(--black);
  color: var(--white);
}
.dark >>> button {
  background-color: #fff;
  color: #000;
}
.error {
  background-color: var(--red-aa);
  color: var(--white);
}
.error >>> button {
  background-color: var(--white);
  border-color: var(--white);
  color: var(--black);
}
</style>
