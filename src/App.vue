<script lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    RouterView,
    HeaderComponent,
  },
  data(): { isNavigated: boolean } {
    return {
      isNavigated: false,
    };
  },
  watch: {
    $route(to): void {
      this.isNavigated = to.name === "person";
    },
  },
  methods: {
    goBack(): void {
      this.$router.go(-1);
    },
  },
});
</script>

<template>
  <header-component
    :is-navigated="isNavigated"
    @go-back="goBack"
  ></header-component>
  <router-view />
</template>
