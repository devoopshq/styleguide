<template>
  <div :id="id + '-' + index" :class="{ 'is-active': item.active }" class="accordion-item">
    <dt class="accordion-item-title">
      <div class="accordion-item-trigger" @click="toggle">
        <h4 class="accordion-item-title-text">{{ item.title }} {{ item.active }}</h4>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path v-if="item.active" d="M19 13H5v-2h14v2z"/>
          <path v-else d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition">
      <dd v-if="item.active" class="accordion-item-details">
        <div class="accordion-item-details-inner" v-html="item.details" />
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    multiple: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'id'
    },
    index: {
      type: Number,
      default: 0
    }
  },

  methods: {
    toggle(event) {
      // if (this.multiple) {
      //   if (this.item.active === true) {
      //     this.item.active = false
      //   } else {
      //     this.item.active = true
      //   }
      // }
      // else {
        this.$parent.$children.forEach(item => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        })
      // }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.accordion div:not(:last-child) {
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}
.accordion dd {
  margin-left: 0;
}

.accordion-item-trigger {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
}

.accordion-item-title h4 {
  font-size: 1.25rem;
  margin: 16px 0;
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  border: none;
}

.accordion-item-details {
  overflow: hidden;
  padding-bottom: 16px;
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}

.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
