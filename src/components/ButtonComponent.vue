<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <button
    class="flex bg-btn hover:shadow-md hover:bg-btnHover text-white rounded px-6 py-3 my-2 mr-2 text-lg"
    @click="$emit('clicked', username)"
    v-text="username"
  ></button>
</template>
