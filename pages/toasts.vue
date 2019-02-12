<template>
  <AppDoc>
    <template #left>
      <Heading1>Toasts</Heading1>

      <AppLabel text="Message Toast" />
      <AppCard>
        <ButtonPrimary @active="bar('toast')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Message Toast with Action" />
      <AppCard>
        <ButtonPrimary @active="bar('toastAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Error Toast" />
      <AppCard>
        <ButtonPrimary :warning="true" @active="bar('toastError')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Error Toast with Action" />
      <AppCard>
        <ButtonPrimary :warning="true" @active="bar('toastErrorAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Dark Toast" />
      <AppCard>
        <ButtonPrimary @active="bar('toastDark')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Dark Toast with Action" />
      <AppCard>
        <ButtonPrimary @active="bar('toastDarkAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>
      <AppToast :toast="toast" />
    </template>
  </AppDoc>
</template>

<script>
export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "toasts" */ '@/components/headings/Heading1'),
    AppCard: () => import(/* webpackChunkName: "toasts" */ '@/components/AppCard'),
    ButtonPrimary: () => import(/* webpackChunkName: "toasts" */ '@/components/buttons/ButtonPrimary'),
    AppToast: () => import(/* webpackChunkName: "toasts" */ '@/components/AppToast'),
    AppLabel: () => import(/* webpackChunkName: "toasts" */ '@/components/AppLabel'),
    AppDoc: () => import(/* webpackChunkName: "toasts" */ '@/components/AppDoc')
  },

  data: () => ({
    toast: {}
  }),

  head: () => ({
    title: 'Toasts'
  }),

  methods: {
    bar (value) {
      this.toast = {}
      switch (value) {
        case ('toastAction'):
          this.toast.action = true
          break
        case ('toastError'):
          this.toast.error = true
          break
        case ('toastErrorAction'):
          this.toast = {
            error: true,
            action: true
          }
          break
        case ('toastDark'):
          this.toast = {
            dark: true
          }
          break
        case ('toastDarkAction'):
          this.toast = {
            dark: true,
            action: true
          }
          break
      }
      this.toast.body = 'The quick brown dev jumps over the lazy frog'
      this.toast.show = true
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content { flex: 1; }
>>> .toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
@media (max-width: 512px) {
  >>> .toast {
    left: 16px;
    bottom: 16px;
    right: 16px;
  }
}
</style>
