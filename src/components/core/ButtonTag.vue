<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :style="{ width: width }"
    :disabled="disabled"
    class="px-4 py-2 rounded inline-block cursor-pointer text-center focus:outline-none focus:shadow-outline"
    :class="getVariantClass"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    width: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "Button"
    },
    variant: {
      type: String,
      default: "main"
    }
  },
  computed: {
    getVariantClass() {
      let clss = {
        main: "bg-blue-500 hover:bg-blue-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
        dark: "bg-gray-500 hover:bg-gray-600 text-white"
      }
      return clss[this.variant]
    }
  }
}
</script>