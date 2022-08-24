<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  data(): { usernames: string[] } {
    return {
      usernames: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"],
    };
  },
  methods: {
    navigateToPerson(username: string): void {
      this.$emit('navigate-to-person', username);
      this.$router.push(`/person/${username}`);
    },
  },
});
</script>

<template>
  <main>
    <div class="flex flex-col py-8 px-6 lg:px-14">
      <div class="w-3/4">
        <h1 class="text-3xl lg:text-4xl font-semibold py-2">Top 5 GitHub Users</h1>
        <p class="text-xl lg:text-lg text-gray-700">Tap the username to see more information</p>
      </div>
      <div class="flex w-full flex-wrap mt-4">
        <div v-for="username in usernames" :key="username">
          <button-component
            :username="username"
            @clicked="navigateToPerson"
          ></button-component>
        </div>
      </div>
    </div>
  </main>
</template>
