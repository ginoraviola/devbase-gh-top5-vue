<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import PersonCard from "@/components/PersonCard.vue";
import retrievePersonInfo from "@/services/person";

interface IPersonViewData {
  userData: null | { name: string; location: string; avatar_url: string };
  loading: boolean;
}

export default defineComponent({
  components: { PersonCard },
  data(): IPersonViewData {
    return {
      userData: null,
      loading: true,
    };
  },
  created(): void {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData(): Promise<void> {
      if (this.$route.params.id && typeof this.$route.params.id === "string") {
        const { data } = await retrievePersonInfo(this.$route.params.id);
        this.userData = data || null;
        this.loading = !data || false;
      }
    },
  },
});
</script>

<template>
  <div class="bg-white rounded-lg w-full p-3 lg:px-8 lg:py-4">
    <div v-if="loading">Loading user...</div>
    <person-card v-else :user="userData"></person-card>
    <hr />
  </div>
</template>
