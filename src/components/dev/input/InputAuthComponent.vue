<template>
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper1">
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper2">
    <!-- this table show when no checkbox/radio here -->
    <label
      v-if="showLabel && type !== 'checkbox' && type !== 'radio'"
      v-bind="resolvedAttrs.labelAttrs"
      class="text-[#ffffff]"
    >
      {{ labelText }}
    </label>

    <span v-if="requiredDisplay === '*'" class="text-red-500">*</span>
    <span
      v-else-if="requiredDisplay === 'italic-text'"
      class="text-[0.625rem] leading-6 text-right italic text-[#ffffff]"
    >
      Required
    </span>
  </div>

  <div
    v-bind="resolvedAttrs.wrapperAttrs.wrapper3"
    class="relative"
    v-for="item in inputItems"
    :key="item.id"
  >
    <!-- Checkbox case input and label -->
    <template v-if="type === 'checkbox'">
      <input
        v-bind="resolvedAttrs.inputAttrs"
        :id="item.id"
        type="checkbox"
        :checked="Boolean(modelValue)"
        @input="$emit('update:modelValue', $event.target.checked)"
        class="cursor-pointer"
      />
      <label
        v-if="showLabel"
        :for="item.id"
        v-bind="resolvedAttrs.labelAttrs"
        class="ml-2 cursor-pointer"
      >
        {{ labelText }}
      </label>
    </template>

    <!-- Radio case -->
    <template v-else-if="type === 'radio'">
      <input
        v-bind="resolvedAttrs.inputAttrs"
        :id="item.id"
        type="radio"
        :value="item.value"
        :checked="modelValue === item.value"
        @input="$emit('update:modelValue', item.value)"
        class="cursor-pointer"
      />
      <label
        :for="item.id"
        v-bind="resolvedAttrs.labelAttrs"
        class="ml-2 cursor-pointer"
      >
        {{ item.label }}
      </label>
    </template>

    <!-- Normal input types -->
    <template v-else>
      <component
        v-if="leftIcon"
        :is="leftIcon"
        class="absolute left-2 top-[50px] transform -translate-y-1/2 pointer-events-none w-5 h-5 text-white"
      />
      <input
        v-bind="resolvedAttrs.inputAttrs"
        :id="item.id"
        :type="type"
        :value="item.value"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <component
        v-if="rightIcon"
        :is="rightIcon"
        class="absolute right-2 mr-1 top-[25px] transform -translate-y-1/2 pointer-events-none w-5 h-5 text-white"
      />
    </template>

    <p
      v-if="description"
      v-bind="resolvedAttrs.descriptionAttrs"
      class="mt-1 text-sm text-white/80"
    >
      {{ description }}
    </p>
  </div>
</div>

</template>

<script setup>
import { computed, ref } from 'vue'
import { resolveAllConfigs } from '../../../utils/componentRenderingUtils'

const props = defineProps({
  modelValue: [String, Number, Boolean],
  version: { type: String, default: '' },


  radioOptions: {
    type: Array,
    required: false,
    default: () => []
  },


  addId: String,
  removeId: Boolean,
  addClass: String,
  removeClass: Boolean,
  addAttributes: Object,
 removeAttributes: { type: Array, default: () => [] },

  name: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  required: Boolean,
  autocomplete: String,


  showLabel: Boolean,
  labelText: { type: String, default: 'Label' },
  requiredDisplay: { type: String, default: '' }, // "*" or "italic-text"


  description: String,


  leftIcon: [String, Object, Function],
  rightIcon: [String, Object, Function],


  radioValue: String,


  wrapperOverrides: { type: Array, default: () => [] }
})


const inputConfig = {
  wrappers: [
    {
      targetAttribute: 'wrapper1',
      addClass: props.type === 'checkbox' ? 'flex items-center' :
        'flex flex-col gap-2',
      addAttributes: { 'data-wrapper': 'wrapper1' }
    },
    {
      targetAttribute: 'wrapper2',
      addClass: props.type === 'checkbox' ? '' :
        props.type === 'radio' ? 'flex items-center gap-2'
          : 'flex justify-between items-center w-full',
      addAttributes: { 'data-wrapper': 'wrapper2' }
    },
    {
      targetAttribute: 'wrapper3',
      addClass: props.type === 'checkbox' ? ''
        : props.type === 'radio' ? 'flex items-center gap-2'
          : 'rounded-[0.625rem] border border-border  bg-input dark:bg-input-dark min-h-10 gap-2.5 pt-3 pb-3 px-2.5 flex justify-center items-center self-stretch',
      addAttributes: { 'data-wrapper': 'wrapper3' }
    },
  ],
  elm: {
    addClass: props.type === 'checkbox' ?
    "m-0 border border-checkboxBorder [appearance:none] w-[0.9rem] h-[0.9rem] rounded-[2px] bg-transparent relative cursor-pointer checked:bg-checkbox checked:border-checkbox checked:[&::after]:content-[''] checked:[&::after]:absolute checked:[&::after]:top-[0.05rem] checked:[&::after]:left-[0.25rem] checked:[&::after]:w-[0.25rem] checked:[&::after]:h-[0.5rem] checked:[&::after]:border-white checked:[&::after]:border-r-[2px] checked:[&::after]:border-b-[2px] checked:[&::after]:border-solid checked:[&::after]:rotate-45 dark:checked:[&::after]:border-[#ffffff]"
    :
      props.type === 'radio' ?
        'w-4 h-4 cursor-pointer accent-primary dark:accent-dark-primary' :
        'w-full font-medium text-base text-text bg-transparent outline-none leading-6 tracking-[0.01rem] placeholder:text-placeholder placeholder:font-light placeholder:text-base placeholder:leading-6 placeholder:tracking-[0.01rem]' +
        (props.leftIcon ? 'pl-10' : 'pl-3') + ' ' +
        (props.rightIcon ? 'pr-10' : 'pr-3'),
    addAttributes: {
      type: props.type
    }
  },
  additionalConfig: {
    label: {
      addClass: props.type === 'checkbox' ?
        'text-[0.875rem] leading-6 text-[#ffffff] cursor-pointer' :
        props.type === 'radio' ?
          'text-sm cursor-pointer text-text' :
          'text-sm leading-6 tracking-[0.009rem] text-[#ffffff]',
      addAttributes: {
        for: 'input-id'
      }
    },
    description: {
      addClass: 'text-sm text-white/80',
      addAttributes: {
        'data-description': 'true'
      }
    }
  }
}

const resolvedAttrs = computed(() =>
  resolveAllConfigs(inputConfig, props.version, props)
)

const inputItems = computed(() => {
  if (props.type === "radio" && props.radioOptions?.length) {
    return props.radioOptions.map(option => ({
      label: option.label,
      value: option.value,
      id: `${props.addId || resolvedAttrs.value.inputAttrs.id}-${option.value}`
    }));
  }

  return [
    {
      label: props.labelText || "",
      value: props.modelValue,
      id: props.addId || resolvedAttrs.value.inputAttrs.id
    }
  ];
});
</script>
