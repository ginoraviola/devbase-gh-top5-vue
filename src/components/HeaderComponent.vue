<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isNavigated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    goBack(): void {
      this.$emit("go-back");
    },
  },
});
</script>

<template>
  <div class="bg-header py-6 sticky flex justify-center items-center shadow-header">
    <div
      v-if="isNavigated"
      class="text-white absolute left-5 cursor-pointer font-normal text-xl"
      @click="goBack"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
      <i class="fa-solid fa-chevrons-left px-1"></i>
      <span>Back</span>
    </div>
    <p
      class="text-2xl font-bold text-white text-center"
    >
      Home
    </p>
  </div>
</template>
