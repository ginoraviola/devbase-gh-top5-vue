<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

interface IUser {
  name: string;
  location: string;
  avatar_url: string;
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="flex my-8 lg:px-4">
    <img
      :src="user.avatar_url"
      :alt="user.name"
      class="rounded-full w-50px h-50px lg:w-75px lg:h-75px mr-5"
    />
    <p class="flex flex-col text-start justify-center">
      <span class="text-lg lg:text-xl font-semibold" v-text="user.name"></span>
      <span class="text-md text-gray-400 lg:font-light" v-text="user.location"></span>
    </p>
  </div>
</template>
