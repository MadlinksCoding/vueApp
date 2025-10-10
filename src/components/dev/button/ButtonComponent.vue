<template>
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper1">
    <div v-bind="resolvedAttrs.wrapperAttrs.wrapper2">
      <button :type="type" v-bind="resolvedAttrs.inputAttrs" :disabled="disabled" @click="handleClick">

        <component v-if="leftIcon" :is="leftIcon" class="mr-2 inline-block w-5 h-5" />


        <span>{{ text }}</span>


        <component v-if="rightIcon" :is="rightIcon" class="ml-2 inline-block w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { resolveAllConfigs } from "../../../utils/componentRenderingUtils"

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}

const props = defineProps({
  text: { type: String, required: true },


   variant: {
    type: String,
    default: "primary",
  },


  size: {
    type: String,
    default: "md",
  },


  leftIcon: [String, Object, Function],
  rightIcon: [String, Object, Function],


  disabled: { type: Boolean, default: false },
  type: { type: String, default: "button" },


  addId: String,
  removeId: Boolean,
  addClass: String,
  removeClass: Boolean,
  addAttributes: Object,
  removeAttributes: { type: Array, default: () => [] },

  version: { type: String, default: "" },
  wrapperOverrides: { type: Array, default: () => [] },
})

// Tailwind theme classes
const themeClasses = {
  primary:
    "bg-primary text-white font-medium rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "bg-gray-600 text-white font-medium rounded-md hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed",
  success:
    "bg-green-600 text-white font-medium rounded-md hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed",
  danger:
    "bg-red-600 text-white font-medium rounded-md hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed",
  warning:
    "bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed",
  outline:
    "border border-gray-400 text-gray-700 font-medium rounded-md hover:bg-gray-100 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed",
}

// Tailwind size classes
const sizeClasses= {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

const buttonConfig = {
  wrappers: [
    {
      targetAttribute: "wrapper1",
      addClass: "flex flex-col w-full",
      addAttributes: { "data-wrapper": "wrapper1" },
    },
    {
      targetAttribute: "wrapper2",
      addClass: "flex items-center gap-2",
      addAttributes: { "data-wrapper": "wrapper2" },
    },
  ],
  elm: {
    addClass: `${themeClasses[props.variant] || themeClasses.primary} ${sizeClasses[props.size] || sizeClasses.md
      }`,
    addAttributes: {
      type: props.type,
      role: "button",
    },
  },
}

const resolvedAttrs = computed(() =>
  resolveAllConfigs(buttonConfig, props.version, props)
)
</script>
