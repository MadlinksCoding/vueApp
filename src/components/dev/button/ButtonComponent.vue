<template>
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper1">
    <div v-bind="resolvedAttrs.wrapperAttrs.wrapper2">
      <button :type="type" v-bind="resolvedAttrs.inputAttrs" :disabled="disabled" @click="handleClick">

         <img v-if="leftIcon" 
         :src="leftIcon"
          :class="`mr-2 inline-block ${leftIconClass}`"
           />


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
   leftIconClass: { type: String, default: "w-5 h-5" },

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
  authTransparent:
  " w-full relative [caret-color:transparent] h-12 px-6 py-2 gap-2.5 rounded-[0.625rem] inline-flex justify-center items-center text-text border border-buttonSecondaryBorder bg-buttonSecondary font-medium text-[15px] transition-opacity duration-100 ease-in-out hover:bg-[linear-gradient(180deg,_rgba(87,_85,_85,_0.50)_0%,_rgba(0,_0,_0,_0.50)_100%)] hover:[box-shadow:0px_0px_20px_0px_rgba(255,150,192,0.8)_inset,_8px_8px_30px_0px_rgba(255,0,102,0.7),_0px_0px_35px_0px_rgba(255,255,221,0.5),_-8px_-8px_30px_0px_rgba(255,0,0,0.7)]",  
   authPink:
   "w-full relative [caret-color:transparent] h-12 px-6 py-2 gap-2.5 rounded-[0.625rem] inline-flex items-center justify-center text-text bg-buttonPrimary  border border-buttonPrimaryBorder font-medium text-[15px] transition-opacity duration-100 ease-in-out hover:bg-gradient-to-b hover:from-[#FF408C] hover:to-[#F00] hover:[box-shadow:0px_0px_20px_0px_rgba(255,150,192,0.8)_inset,_8px_8px_30px_0px_rgba(255,0,102,0.7),_0px_0px_35px_0px_rgba(255,255,221,0.5),_-8px_-8px_30px_0px_rgba(255,0,0,0.7)]"
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
