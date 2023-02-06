<template>
  <q-select
    class="base-input"
    v-bind="$attrs"
    @update:model-value="change"
    hide-bottom-space
    :model-value="modelValue"
  >
    <template v-if="placeholder && !modelValue" #selected>
      <div class="text-grey-6">
        <span class="placeholder">{{ placeholder }}</span>
        <span v-if="required" class="required-text-red">*</span>
      </div>
    </template>
    <template v-if="!placeholder" #label>
      <span>{{ label }}</span>
    </template>
    <template v-if="prepend" #prepend>
      <slot name="prepend" />
    </template>
  </q-select>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,
  required: {
    type: Boolean,
    default: false,
  },
  prepend: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

function change(v) {
  emit("update:modelValue", v);
}
</script>
<style lang="scss" scoped>
.base-input {
  width: 100%;
  .standout-bg-gray {
    background-color: #fff !important;
    border: 0.5px solid #a0a0a0 !important;
    .q-field__native {
      color: #000 !important;
    }
    .phone-prefix {
      color: #000 !important;
    }
  }
  .q-field__native {
    // padding: 13px 8px;
    width: 100%;
  }
  .q-field__control {
    height: auto;
    background-color: #fff;
    border: 0.5px solid transparent;
    border-radius: 12px;
    margin-right: 20px;
    padding: 0;
    width: 100%;
  }
  .q-field__append {
    // padding: 30px 8px;
  }
}
</style>
