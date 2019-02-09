<template>
  <div class="container">
    <div class="content">
      <Heading1>
        Toasts
      </Heading1>

      <small>Message Toast</small>
      <AppCard>
        <ButtonPrimary @active="bar('toast')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <small>Message Toast with Action</small>
      <AppCard>
        <ButtonPrimary @active="bar('toastAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <small>Error Toast</small>
      <AppCard>
        <ButtonPrimary :warning="true" @active="bar('toastError')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <small>Error Toast with Action</small>
      <AppCard>
        <ButtonPrimary :warning="true" @active="bar('toastErrorAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <small>Dark Toast</small>
      <AppCard>
        <ButtonPrimary @active="bar('toastDark')">
          Show Toast
        </ButtonPrimary>
      </AppCard>

      <small>Dark Toast with Action</small>
      <AppCard>
        <ButtonPrimary @active="bar('toastDarkAction')">
          Show Toast
        </ButtonPrimary>
      </AppCard>
    </div>

    <AppToast :toast="toast" />
  </div>
</template>

<script>
// import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import AppToast from '@/components/AppToast'

export default {
  components: {
    Heading1,
    AppCard,
    ButtonPrimary,
    AppToast
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
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #717171;
}
.container {
  min-height: 100%;
  /* outline: 1px dashed; */
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
</style>
