<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="inputClass"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default:
        "bg-white/50 w-44 px-3 py-2 rounded-tl-sm rounded-tr-sm outline-none shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border-b border-gray-300 inline-flex justify-start items-start",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
