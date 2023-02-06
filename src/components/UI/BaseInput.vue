<template>
  <q-no-ssr>
    <q-input
      v-bind="$attrs"
      class="base-input"
      lazy-rules="ondemand"
      ref="inputRef"
      hide-bottom-space
      :model-value="modelValue"
      @update:model-value="change"
    >
      <template v-if="append" #append>
        <slot name="append" />
      </template>
      <template v-if="prepend" #prepend>
        <slot name="prepend" />
      </template>
    </q-input>
  </q-no-ssr>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useAttrs } from "vue-demi";

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  append: {
    type: Boolean,
    default: false,
  },
  prepend: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const attrs = useAttrs();

onBeforeUnmount(() => {
  inputEl?.removeEventListener("keydown", fixCursorPosition);
});

const inputRef = ref(null);
let inputEl = null;

onMounted(() => {
  init();
});

function init() {
  const $el = inputRef.value?.$el;
  if (attrs.mask && $el) {
    inputEl = $el.getElementsByTagName("input")[0];
    inputEl.addEventListener("keydown", fixCursorPosition);
  }
}

const fixCursorPosition = (e) => {
  if (e.code === "ArrowLeft" || e.code === "ArrowRight") return;

  const start = inputEl.selectionStart;
  if (e.code === "Backspace") {
    setTimeout(() => setCursorPosition(e.target, start));
  } else {
    setTimeout(() => {
      let newStart = start + 1;

      // is right value space?
      if (e.target.value[start + 1] === " ") newStart = start + 2;

      setCursorPosition(e.target, newStart);
    });
  }
};

const setCursorPosition = (el, position) => {
  el.selectionStart = el.selectionEnd = position;
};

function change(v) {
  emit("update:modelValue", v);
}

function focus() {
  inputRef.value.focus();
}
function resetValidation() {
  inputRef.value.resetValidation();
}

defineExpose({
  focus,
  resetValidation,
});
</script>

<style lang="scss">
.base-input {
  width: 100% !important;
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
    padding: 13px 8px;
    width: 100%;
  }
  .q-field__control {
    height: auto;
    background-color: #fff;
    border: 0.5px solid transparent;
    border-radius: 12px;
    margin-right: 20px;
    width: 100% !important;
  }
  .q-field__append {
    padding: 30px 8px;
  }
}
</style>
