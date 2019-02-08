<template>
  <div>
    <small>Collapsible Group</small>
    <AppCard>
      <Accordion id="a" :content="content" />
    </AppCard>

    <small>Collapsible Group with Expanded Item</small>
    <AppCard>
      <Accordion id="b" :content="content2" :multiple="true" />
    </AppCard>
  </div>
</template>


<script>
import Accordion from '@/components/Accordion'
import AppCard from '@/components/AppCard'
export default {
  components: {
    Accordion,
    AppCard
  },

  data: () => ({
    isOpen: true,
    content: [
      {
        active: false,
        title: 'Question A',
        details: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        `
      },
      {
        active: false,
        title: 'Question B',
        details: `
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      }
    ],
     content2: [
      {
        active: true,
        title: 'Question A',
        details: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        `
      },
      {
        active: false,
        title: 'Question B',
        details: `
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      }
    ]
  })
}
</script>

<style lang="postcss" scoped>

</style>
